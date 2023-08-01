-- User table

CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000)
);

CREATE TRIGGER IF NOT EXISTS trigger_after_update_user_update_updated_at
   AFTER UPDATE ON user
BEGIN
    UPDATE user SET updated_at=(strftime('%s', 'now') * 1000) WHERE id=OLD.id;
END;

-- User indexes

CREATE INDEX IF NOT EXISTS idx_user_username ON user(username);

-- insert admin user if not exists

INSERT OR IGNORE INTO user (username, password) VALUES ('admin', 'admin');
