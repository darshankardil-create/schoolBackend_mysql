


export async function defineschema(db) {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS schooltable (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        address VARCHAR(255) NOT NULL, 
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL,
        UNIQUE (name, address, latitude, longitude)
    )
`);
}
