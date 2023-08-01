-- BlogPost table

CREATE TABLE IF NOT EXISTS blog_post(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   slug TEXT NOT NULL,
   title TEXT NOT NULL,
   published BOOLEAN NOT NULL CHECK (published IN (0, 1)) DEFAULT 0,
   deleted BOOLEAN NOT NULL CHECK (deleted IN (0, 1)) DEFAULT 0,
   published_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
   created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
   updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
   UNIQUE (slug, deleted)
);

CREATE TRIGGER IF NOT EXISTS trigger_after_update_blog_post_update_updated_at
   AFTER UPDATE ON blog_post
BEGIN
   UPDATE blog_post SET updated_at=(strftime('%s', 'now') * 1000) WHERE id=OLD.id AND NEW.published = 0;
END;

CREATE TRIGGER IF NOT EXISTS trigger_after_update_blog_post_published_at
   AFTER UPDATE ON blog_post
   WHEN NEW.published = 0 AND NEW.published != OLD.published
BEGIN
   UPDATE blog_post SET published_at=(strftime('%s', 'now') * 1000), updated_at=(strftime('%s', 'now') * 1000) WHERE id=OLD.id;
END;

-- BlogPost indexes

CREATE INDEX IF NOT EXISTS idx_blog_post_published ON blog_post(published);
CREATE INDEX IF NOT EXISTS idx_blog_post_slug ON blog_post(slug);

-- BlogHtmlContent table

CREATE TABLE IF NOT EXISTS blog_html_content(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL UNIQUE,
    content TEXT NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
    FOREIGN KEY (post_id) references blog_post(id)
);

CREATE TRIGGER IF NOT EXISTS trigger_after_update_blog_html_content_update_updated_at
   AFTER UPDATE ON blog_html_content
BEGIN
   UPDATE blog_html_content SET updated_at=(strftime('%s', 'now') * 1000) WHERE id=OLD.id;
END;

-- BlogHtmlContent indexes

CREATE INDEX IF NOT EXISTS idx_blog_html_content_post_id ON blog_html_content(post_id);

-- BlogRawContent table

CREATE TABLE IF NOT EXISTS blog_raw_content(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER NOT NULL UNIQUE,
    content TEXT NOT NULL,
    created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
    updated_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now') * 1000),
    FOREIGN KEY (post_id) references blog_post(id)
);

CREATE TRIGGER IF NOT EXISTS trigger_after_update_blog_raw_content_update_updated_at
   AFTER UPDATE ON blog_raw_content
BEGIN
   UPDATE blog_raw_content SET updated_at=(strftime('%s', 'now') * 1000) WHERE id=OLD.id;
END;

-- BlogRawContent indexes

CREATE INDEX IF NOT EXISTS idx_blog_raw_content_post_id ON blog_raw_content(post_id);

-- Insert a default post

INSERT INTO blog_post(slug, title, published) VALUES('hello-world', 'Hello World', 1);

-- Insert a default post html content

INSERT INTO blog_html_content(post_id, content) VALUES(1, '<h1>Hello World!</h1><p>This is a default post.</p>');

-- Insert a default post raw content

INSERT INTO blog_raw_content(post_id, content) VALUES(1, '# Hello World!' || char(10) || 'This is a default post.');