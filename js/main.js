api_url = "https://osu.ppy.sh/api/get_beatmaps"
async function getData() {
  response = await fetch(api_url)
  data = await response.json()
  console.log(data)
}

getData()
