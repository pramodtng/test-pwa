// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export async function loadData(){
  const res = await fetch('https://tashielectronicsbackend.tashicell.com/api/phones?populate=*')
  const data = await res.json()
  return data
}
