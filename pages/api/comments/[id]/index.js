import Comment from "@/db/models/Comment";

export default function handler(request, response) {
  const { id } = request.query;
  const foundComments = Comment.filter(({ placeId }) => placeId === id);
  response.status(200).json(foundComments);
  return;
}
