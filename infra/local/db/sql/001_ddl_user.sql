---- drop ----
DROP TABLE IF EXISTS lradb.user;

---- create ----
create table IF not exists lradb.user
(
  user_id       INT(20) AUTO_INCREMENT PRIMARY KEY,
  username   VARCHAR(256) NOT NULL UNIQUE,
  password    VARCHAR(256) NOT NULL,
  is_active     boolean DEFAULT true,
  created_at   Datetime DEFAULT NULL,
  updated_at  Datetime DEFAULT NULL
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
