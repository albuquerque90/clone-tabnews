function status(request, response) {
  response.status(200).json({ status: "Tudo nos trinques" });
}

export default status;
