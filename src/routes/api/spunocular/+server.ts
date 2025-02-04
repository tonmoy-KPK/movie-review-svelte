// import { json } from "@sveltejs/kit";

// export async function GET() {
//   const API_KEY = import.meta.env.VITE_SPUNOCULAR_API_KEY;
  
//   const res = await fetch("https://api.spunocular.com/data", {
//     headers: { "Authorization": `Bearer ${API_KEY}` }
//   });

//   if (!res.ok) return json({ error: "Failed to fetch" }, { status: res.status });

//   const data = await res.json();
//   return json(data);
// }
