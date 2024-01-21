const api = async () => {
  const client = await fetch('http://google.com')
  return client.json()
}

export default api