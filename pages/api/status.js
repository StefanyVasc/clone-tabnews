function status(request, response) {
  response.status(200).json({ chave: 'curso show' });
}

export default status;
