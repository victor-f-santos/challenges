console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log("Count :", data.count);
  } catch {
    console.log("R2D2 Eye's color: ", data.results[2].eye_color);
  }

  return data;
}

fetchData();
