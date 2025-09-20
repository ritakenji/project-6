import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }

    response.status(200).json(place);
    return;
  }

  if (request.method === "PUT") {
    const placeData = request.body;
    const place = await Place.findByIdAndUpdate(id, placeData); //gets 2 arguments, id and the data retrieved

    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }

    response.status(200).json({ status: "Place updated" });
  }

  response.status(405).json({ status: "Method not allowed" });
}
