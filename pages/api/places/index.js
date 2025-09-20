import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  try {
    if (request.method === "GET") {
      const places = await Place.find(); //Find them all
      response.status(200).json(places);
      return;
    }

    //Where do the new places need to go? pages/api/places/index, why not [id]? Because the new place won't have a new id when submitted

    if (request.method === "POST") {
      const placeData = request.body; //Where can the FE send info on the new place to the BE? Int he body of the request
      await Place.create(placeData); //create aka add for POST method in BE
      response.status(200).json({ status: "Place created." });
      return;
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Internal Server Error" });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });

  return;
}
