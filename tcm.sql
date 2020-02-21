/*
 Navicat Premium Data Transfer

 Source Server         : lucas
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : tcm

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 21/02/2020 12:35:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for rel_menu_article
-- ----------------------------
DROP TABLE IF EXISTS `rel_menu_article`;
CREATE TABLE `rel_menu_article`  (
  `menu_article_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '目录文章ID',
  `menu_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '目录code 关联menu表',
  `article_id` int(0) NOT NULL COMMENT '文章id 关联文章article表',
  PRIMARY KEY (`menu_article_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rel_menu_article
-- ----------------------------
INSERT INTO `rel_menu_article` VALUES (1, '003001', 1);
INSERT INTO `rel_menu_article` VALUES (2, '001005002', 2);
INSERT INTO `rel_menu_article` VALUES (3, '002001', 3);
INSERT INTO `rel_menu_article` VALUES (9, '001001', 10);

-- ----------------------------
-- Table structure for rel_moment_file
-- ----------------------------
DROP TABLE IF EXISTS `rel_moment_file`;
CREATE TABLE `rel_moment_file`  (
  `rel_moment_file_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '动态图片的identifier',
  `file_path` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '动态图片的路径',
  `moment_id` int(0) NOT NULL COMMENT '动态的identifier',
  `order` int(0) NOT NULL COMMENT '动态图片的序列号',
  PRIMARY KEY (`rel_moment_file_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rel_moment_file
-- ----------------------------
INSERT INTO `rel_moment_file` VALUES (7, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg', 6, 1);
INSERT INTO `rel_moment_file` VALUES (8, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg', 6, 2);

-- ----------------------------
-- Table structure for sys_admin
-- ----------------------------
DROP TABLE IF EXISTS `sys_admin`;
CREATE TABLE `sys_admin`  (
  `admin_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '管理员的唯一标识符',
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '管理员头像路由地址',
  `admin_account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员的登录账号',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '管理员的登录密码',
  `role` tinyint(0) NOT NULL COMMENT '管理员的角色（是否为超级管理员）',
  PRIMARY KEY (`admin_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_admin
-- ----------------------------
INSERT INTO `sys_admin` VALUES (1, 'https://avatars1.githubusercontent.com/u/30335361?s=460&v=4', 'luoxinghan', '123456', 1);
INSERT INTO `sys_admin` VALUES (2, NULL, 'root', '123456', 1);

-- ----------------------------
-- Table structure for sys_article
-- ----------------------------
DROP TABLE IF EXISTS `sys_article`;
CREATE TABLE `sys_article`  (
  `article_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '文章的id',
  `article_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文章标题内容',
  `article_content` longblob NULL COMMENT '文章内容 二进制数据',
  `article_raw` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '用以保存文章内容的Raw类型的数据',
  `published_time` datetime(0) NOT NULL COMMENT '文章发布时间',
  `is_show` tinyint(0) NOT NULL DEFAULT 1 COMMENT '是否展示在前台 1展示 0不展示',
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`article_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_article
-- ----------------------------
INSERT INTO `sys_article` VALUES (2, '太恐怖了！感冒了一定不能吃这些东西，不然会威胁到生命！', NULL, '{\"blocks\":[{\"key\":\"79rlu\",\"text\":\"1、蜂蜜\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"COLOR-191919\"},{\"offset\":0,\"length\":4,\"style\":\"FONTSIZE-16\"},{\"offset\":0,\"length\":4,\"style\":\"BGCOLOR-FFFFFF\"},{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4j202\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"left\",\"textIndent\":1}},{\"key\":\"4cg5\",\"text\":\"人在患感冒发烧时，其饮食应该以清淡为主，非常滋补的食物在这个时候应该避免食用，以免导致感冒发烧的症状愈加严重。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":55,\"style\":\"FONTSIZE-16\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"f0gcl\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{},\"textAlign\":\"left\",\"textIndent\":1}},{\"key\":\"45v\",\"text\":\"在中医上，蜂蜜是有很好的益气补中功效的，如果在感冒期间饮用蜂蜜，就会导致患者体内的热气得不到清理、消除，从而疾病得不到很好的治疗，甚至引发一些其他疾病。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":76,\"style\":\"FONTSIZE-16\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"5589c\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"2q3as\",\"text\":\"2、鸭、猪、\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"COLOR-191919\"},{\"offset\":0,\"length\":6,\"style\":\"FONTSIZE-16\"},{\"offset\":0,\"length\":6,\"style\":\"BGCOLOR-FFFFFF\"},{\"offset\":0,\"length\":6,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"b5fqs\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"alignment\":\"center\"}},{\"key\":\"9p7so\",\"text\":\"鸭肉性凉，人吃的话，容易滑肠敛邪；猪肉肥腻，人吃容易助湿生痰；而羊肉甘温助热，对于发烧的治疗有很大的影响。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":2,\"style\":\"BOLD\"},{\"offset\":17,\"length\":2,\"style\":\"BOLD\"},{\"offset\":32,\"length\":2,\"style\":\"BOLD\"},{\"offset\":0,\"length\":53,\"style\":\"FONTSIZE-16\"},{\"offset\":2,\"length\":51,\"style\":\"COLOR-191919\"},{\"offset\":2,\"length\":51,\"style\":\"BGCOLOR-FFFFFF\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"1ka2s\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{}}},{\"key\":\"41ju5\",\"text\":\"3、钉子\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"COLOR-191919\"},{\"offset\":0,\"length\":4,\"style\":\"FONTSIZE-16\"},{\"offset\":0,\"length\":4,\"style\":\"BGCOLOR-FFFFFF\"},{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{}}},{\"key\":\"d4fud\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"encbp\",\"text\":\"钉子很容易刺穿食道，所以最好不要在感冒的时候吃。\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":24,\"style\":\"COLOR-333333\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', '2019-11-26 22:35:49', 1, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg');
INSERT INTO `sys_article` VALUES (3, '测试测试3', NULL, '{\"blocks\":[{\"key\":\"9hu83\",\"text\":\"How do different medical traditions keep good, bad and total cholesterol levels down? Read More\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":6,\"length\":5,\"style\":\"BOLD\"},{\"offset\":6,\"length\":5,\"style\":\"COLOR-F32784\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', '2019-11-06 19:44:00', 1, NULL);
INSERT INTO `sys_article` VALUES (10, '测试一下添加文章', NULL, '{\"blocks\":[{\"key\":\"ch41e\",\"text\":\"Hello World!\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":6,\"length\":6,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{\"nodeAttributes\":{}}},{\"key\":\"dn10u\",\"text\":\"你好\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":2,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"b82g3\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"fjt6l\",\"text\":\" \",\"type\":\"atomic\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":0,\"length\":1,\"key\":0}],\"data\":{}},{\"key\":\"64fc1\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"IMAGE\",\"mutability\":\"IMMUTABLE\",\"data\":{\"url\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiEAAAEDCAYAAADjm9QnAAAXKElEQVR4Xu3dCXPbRrYGUNqy4yXeEif//wfG8RrvljR1OY95MociQCy8fYGDKlemJgK6+9xO6XOjAdy5vr6+3jgIECBAgAABAmcWuCOEnFlccwQIECBAgMBWQAgxEQgQIECAAIEUASEkhV2jBAgQIECAgBBiDhAgQIAAAQIpAkJICrtGCRAgQIAAASHEHCBAgAABAgRSBISQFHaNEiBAgAABAkKIOUCAAAECBAikCAghKewaJUCAAAECBIQQc4AAAQIECBBIERBCUtg1SoAAAQIECAgh5gABAgQIECCQIiCEpLBrlAABAgQIEBBCzAECBAgQIEAgRUAISWHXKAECBAgQICCEmAMECBAgQIBAioAQksKuUQIECBAgQEAIMQcIECBAgACBFAEhJIVdowQIECBAgIAQYg4QIECAAAECKQJCSAq7RgkQIECAAAEhxBwgQIAAAQIEUgSEkBR2jRIgQIAAAQJCiDlAgAABAgQIpAgIISnsGiVAgAABAgSEEHOAAAECBAgQSBEQQlLYNUqAAAECBAgIIeYAAQIECBAgkCIghKSwa5QAAQIECBAQQswBAgQIECBAIEVACElh1ygBAgQIECAghJgDBAgQIECAQIqAEJLCrlECBAgQIEBACDEHCBAgQIAAgRQBISSFXaMECBAgQICAEGIOECBAgAABAikCQkgKu0YJECBAgAABIcQcIECAAAECBFIEhJAUdo0SIECAAAECQog5QIAAAQIECKQICCEp7BolQIAAAQIEhBBzgAABAgQIEEgREEJS2DVKgAABAgQICCHmAAECBAgQIJAiIISksGuUAAECBAgQEELMAQIECBAgQCBFQAhJYdcoAQIECBAgIISYAwQIECBAgECKgBCSwq5RAgQIECBAQAgxBwgQIECAAIEUASEkhV2jBAgQIECAgBBiDhAgQIAAAQIpAkJICrtGCRAgQIAAASHEHCBAgAABAgRSBISQFHaNEiBAgAABAkKIOUCAAAECBAikCAghKewaJUCAAAECBIQQc4AAAQIECBBIERBCUtg1SoAAAQIECAgh5gABAgQIECCQIiCEpLBrlAABAgQIEBBCzAECBAgQIEAgRUAISWHXKAECBAgQICCEmAMECBAgQIBAioAQksKuUQIECBAgQEAI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GgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gJCSPkSGgABAgQIEKgpIITUrJteEyBAgACB8gL/AdNtrH9pCerBAAAAAElFTkSuQmCC\",\"name\":\"30165841-574674d510324adfb483434f376072c0.png\",\"type\":\"IMAGE\"}}}}', '2019-12-10 14:02:28', 0, NULL);

-- ----------------------------
-- Table structure for sys_employee
-- ----------------------------
DROP TABLE IF EXISTS `sys_employee`;
CREATE TABLE `sys_employee`  (
  `employee_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '职工id 自增字段',
  `role_id` int(0) NOT NULL COMMENT '员工角色ID 关联role表',
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像的路径',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '职工姓名',
  `sex` tinyint(0) NOT NULL DEFAULT 2 COMMENT '职工性别 0女性 1男性 2保密',
  `phone_num` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '电话号码',
  `date_of_birth` date NULL DEFAULT NULL COMMENT '出生日期',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '员工住址',
  `employee_description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '员工描述 如果员工类型为医生则描述',
  PRIMARY KEY (`employee_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_employee
-- ----------------------------
INSERT INTO `sys_employee` VALUES (4, 3, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg', '罗杏函111111', 2, '13413413413', '1998-07-26', 'г.Гродно ул. Даватара 22', '一些信息信修改');
INSERT INTO `sys_employee` VALUES (5, 4, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg', '罗大壮', 1, '8613667601677', '1998-07-25', '重庆市巴南区重庆理工大学花溪校区', '测试的信息测试的信息测试的信息');

-- ----------------------------
-- Table structure for sys_file
-- ----------------------------
DROP TABLE IF EXISTS `sys_file`;
CREATE TABLE `sys_file`  (
  `file_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '文件的id',
  `file_type` tinyint(0) NOT NULL DEFAULT 2 COMMENT '文件具体的类型 0视频 1轮播图 2小儿推拿宣传',
  `file_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '' COMMENT '文件的路径',
  `order` tinyint(0) NULL DEFAULT NULL COMMENT '图片顺序',
  `upload_time` datetime(0) NOT NULL COMMENT '文件上传时间',
  PRIMARY KEY (`file_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_file
-- ----------------------------
INSERT INTO `sys_file` VALUES (2, 1, 'https://i.loli.net/2019/11/26/LuAv9rtz1g3Xq8C.jpg', 10, '2019-12-07 22:35:33');
INSERT INTO `sys_file` VALUES (4, 3, 'https://i.loli.net/2019/11/17/pudaovbTefSJsDx.jpg', 22, '2019-12-10 14:22:25');
INSERT INTO `sys_file` VALUES (6, 1, '/public/images/2019-12-10-14-18-54-718.jpg', 22, '2019-12-10 14:19:15');

-- ----------------------------
-- Table structure for sys_massage_course
-- ----------------------------
DROP TABLE IF EXISTS `sys_massage_course`;
CREATE TABLE `sys_massage_course`  (
  `course_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '小儿推拿课程ID',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '小儿推拿课程名称',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '小儿推拿课程简介',
  `lecturee` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '讲课讲师',
  `address` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '课程地点',
  `lecture_time` datetime(0) NOT NULL COMMENT '开课时间',
  `published_time` datetime(0) NOT NULL COMMENT '发布时间',
  PRIMARY KEY (`course_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_massage_course
-- ----------------------------
INSERT INTO `sys_massage_course` VALUES (1, '小儿推拿课程1', NULL, 'RoHank', 'China, BeiJing', '2019-03-23 00:00:00', '2019-03-25 00:00:00');
INSERT INTO `sys_massage_course` VALUES (2, '测试测试2', NULL, 'RoHank', 'China, WuHan', '2019-03-23 00:00:00', '2019-03-25 00:00:00');
INSERT INTO `sys_massage_course` VALUES (3, '测试测试3', NULL, 'RoHank', 'China, SiChuan', '2019-03-23 00:00:00', '2019-03-23 00:00:00');
INSERT INTO `sys_massage_course` VALUES (4, '测试测试4', NULL, 'RoHank', 'China, ChongQing', '2019-03-23 00:00:00', '2019-03-25 00:00:00');
INSERT INTO `sys_massage_course` VALUES (5, '测试测试4', NULL, 'RoHank', 'China, ChongQing', '2019-03-23 00:00:00', '2019-03-25 00:00:00');
INSERT INTO `sys_massage_course` VALUES (6, '测试测试4', NULL, 'RoHank', 'China, ChongQing', '2019-03-23 00:00:00', '2019-03-23 00:00:00');
INSERT INTO `sys_massage_course` VALUES (7, '测试测试4', NULL, 'RoHank', 'China, ChongQing', '2019-03-23 00:00:00', '2019-03-25 00:00:00');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '菜单编码 这次三位数 001',
  `menu_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '菜单的名称',
  `parent_code` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '关联自身表，如果为一个菜单的子菜单，则对应父菜单。',
  `level` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '一个层级，前台组件需要。0、0-1、1、1-1等类似',
  `is_show` tinyint(0) NOT NULL DEFAULT 1 COMMENT '是否展示在了解中医中 1.展示 0不展示',
  `is_modify` tinyint(0) NOT NULL DEFAULT 1 COMMENT '是否允许修改 1.允许 0.不允许修改',
  `imgUrl` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('001', '测试测试修改', '000', '1', 1, 0, 'https://i.loli.net/2019/11/16/mfbAaXW6gntFd3G.jpg');
INSERT INTO `sys_menu` VALUES ('001001', '阴阳学说', '001', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001002', '五行学说', '001', '2', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001003', '藏象', '001', '2', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004', '五脏', '001', '2', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004001', '心', '001004', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004002', '肝', '001004', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004003', '脾', '001004', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004004', '肺', '001004', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001004005', '肾', '001004', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005', '六腑', '001', '2', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005001', '胆', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005002', '胃', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005003', '小肠', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005004', '大肠', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001005005', '膀胱', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('001006005', '三焦', '001005', '3', 0, 0, NULL);
INSERT INTO `sys_menu` VALUES ('002', '诊断方法', '000', '1', 1, 0, 'https://i.loli.net/2019/11/16/rUzXQ7VEOMdH6af.jpg');
INSERT INTO `sys_menu` VALUES ('002001', '望诊', '002', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('002002', '闻诊', '002', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('002003', '问诊', '002', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('002004', '切诊', '002', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('003', '治疗方法', '000', '1', 1, 0, 'https://i.loli.net/2019/11/16/HkRAnwbvh8Z79lO.jpg');
INSERT INTO `sys_menu` VALUES ('003001', '针刺', '003', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('003002', '艾灸', '003', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('003003', '砭石', '003', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('003004', '汤药', '003', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('004', '常见疾病', '000', '1', 1, 0, 'https://i.loli.net/2019/11/16/UMJ8hdnvuWDxOeR.jpg');
INSERT INTO `sys_menu` VALUES ('004001', '过敏性鼻炎', '004', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('004002', '腹胀便溏', '004', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('004003', '支气管炎', '004', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('004004', '风湿病', '004', '2', 1, 0, NULL);
INSERT INTO `sys_menu` VALUES ('004005', '精力不足', '004', '2', 1, 0, NULL);

-- ----------------------------
-- Table structure for sys_moment
-- ----------------------------
DROP TABLE IF EXISTS `sys_moment`;
CREATE TABLE `sys_moment`  (
  `moment_id` int(0) NOT NULL AUTO_INCREMENT,
  `moment_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '动态标题',
  `moment_content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '动态内容',
  `moment_raw` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '用以保存文章内容的Raw类型的数据',
  `published_time` datetime(0) NOT NULL COMMENT '动态发布时间',
  `is_show` tinyint(0) NOT NULL DEFAULT 1 COMMENT '是否展示在前台动态 1展示 0不展示',
  PRIMARY KEY (`moment_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_moment
-- ----------------------------
INSERT INTO `sys_moment` VALUES (6, '关于庆祝中华人名共和国建国70周年的放假通知', '新华社北京10月1日电 壮阔七十载，奋进新时代。10月1日上午，庆祝中华人民共和国成立70周年大会在北京天安门广场隆重举行，20余万军民以盛大的阅兵仪式和群众游行欢庆共和国70华诞。', NULL, '2020-02-21 11:42:23', 1);

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` int(0) NOT NULL AUTO_INCREMENT COMMENT '职工角色ID 自增',
  `role_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '职工角色名称',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, 'root');
INSERT INTO `sys_role` VALUES (2, 'dev');
INSERT INTO `sys_role` VALUES (3, 'regesiter');
INSERT INTO `sys_role` VALUES (4, 'general_admin');
INSERT INTO `sys_role` VALUES (6, 'test');
INSERT INTO `sys_role` VALUES (7, 'test');
INSERT INTO `sys_role` VALUES (8, 'test');
INSERT INTO `sys_role` VALUES (9, 'test');
INSERT INTO `sys_role` VALUES (10, 'test');
INSERT INTO `sys_role` VALUES (12, 'test');
INSERT INTO `sys_role` VALUES (13, 'test');
INSERT INTO `sys_role` VALUES (14, '111111');
INSERT INTO `sys_role` VALUES (15, 'test');
INSERT INTO `sys_role` VALUES (16, 'test');

SET FOREIGN_KEY_CHECKS = 1;