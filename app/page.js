export default async function Home() {
  const response = await fetch("https://restfull-ikan.vercel.app/ikan")
  const data = await response.json()
  return (
    <div className="p-12 shadow-md rounded-2xl">
      <div className="flex flex-row gap-3 justify-around ">
        {data.map((ikan) => (
          <div key={ikan.id}>
            <a href={`/member/${ikan.id}`}>
              <h2>{ikan.nama}</h2>
            </a>
          </div>
        ))}
      </div >
    </div>
  )
}