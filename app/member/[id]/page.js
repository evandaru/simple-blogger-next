export default async function Page({ params }) {
    const response = await fetch("https://restfull-ikan.vercel.app/ikan");
    const data = await response.json();

    // Cari data ikan yang sesuai dengan id yang diterima dari params
    const ikan = data.find((item) => item.id === params.id);

    return (
        <div>
            {ikan ? (
                <div>
                    <h1>{ikan.nama}</h1>
                    <p>Jenis: {ikan.jenis}</p>
                    <p>Harga: {ikan.harga}</p>
                    <p>{ikan.deskripsi}</p>
                </div>
            ) : (
                <p>Tidak ada data ikan dengan ID {params.id}</p>
            )}
        </div>
    );
}
