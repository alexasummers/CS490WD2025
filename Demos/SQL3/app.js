// Wait for sql.js to load and initialize the DB
initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}` }).then(SQL => {
  const db = new SQL.Database();

  // SQL schema + sample data (same as schema.sql)
  const schema = `
    CREATE TABLE users (
      id INTEGER PRIMARY KEY,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    );

    CREATE TABLE books (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      author TEXT NOT NULL
    );

    CREATE TABLE reviews (
      id INTEGER PRIMARY KEY,
      user_id INTEGER NOT NULL,
      book_id INTEGER NOT NULL,
      rating INTEGER CHECK(rating BETWEEN 1 AND 5),
      review_text TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (book_id) REFERENCES books(id)
    );

    INSERT INTO users (id, username, email) VALUES
      (1, 'alice', 'alice@example.com'),
      (2, 'bob', 'bob@example.com');

    INSERT INTO books (id, title, author) VALUES
      (1, 'The Hobbit', 'J.R.R. Tolkien'),
      (2, '1984', 'George Orwell');

    INSERT INTO reviews (id, user_id, book_id, rating, review_text) VALUES
      (1, 1, 1, 5, 'A timeless fantasy classic.'),
      (2, 2, 2, 4, 'Disturbing but thought-provoking.');
  `;

  // Run SQL to create tables and insert data
  db.run(schema);

  // Button click handler to load and display reviews
  document.getElementById('load-data').addEventListener('click', () => {
    const stmt = db.prepare(`
      SELECT u.username, b.title, r.rating, r.review_text
      FROM reviews r
      JOIN users u ON r.user_id = u.id
      JOIN books b ON r.book_id = b.id
    `);

    let html = '<ul>';
    while (stmt.step()) {
      const row = stmt.getAsObject();
      html += `<li><strong>${row.username}</strong> rated <em>${row.title}</em> ${row.rating}/5: ${row.review_text}</li>`;
    }
    html += '</ul>';

    document.getElementById('reviews').innerHTML = html;

    stmt.free();
  });
});
