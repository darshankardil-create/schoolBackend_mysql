import connectDB from "./mysqlconfig/config.js";

const db = await connectDB();

export async function handleaddschool(req, res) {
  try {
    await db.execute(
      "insert into schooltable(name,address,latitude,longitude) values(?,?,?,?)",
      [req.body.name, req.body.address, req.body.latitude, req.body.longitude],
    );

    res.status(200).json({ message: "school data saved successfully" });

    const [rows] = await db.execute("select * from schooltable");

    console.log(rows);
  } catch (error) {
    if (
      error.message ===
      "Bind parameters must not contain undefined. To pass SQL NULL specify JS null"
    ) {
      return res.status(400).json({
        message:
          "The request body must include all required fields: name, address, latitude, and longitude. None of these fields can be omitted or left out!",
      });
    } else if (error.errno === 1062) {
      return res
        .status(409)
        .json({ message: "Already exists in mysql database!" });
    }
    res.status(500).json({ message: error.message });
    console.error(error);
  }
}

export async function handlelistschool(req, res) {
  try {
    const query = `
            SELECT *,
            ST_Distance_Sphere(point(longitude, latitude), point(?, ?)) AS distance
            FROM schooltable
            ORDER BY distance ASC 
        `;

    const [rows] = await db.execute(query, [
      req.params.longitude,
      req.params.latitude,
    ]);

    res.status(200).json({
      message: `successfully sorted ascending on the basis of longitude:${req.params.longitude} and latitude:${req.params.latitude}`,
      data: rows,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
