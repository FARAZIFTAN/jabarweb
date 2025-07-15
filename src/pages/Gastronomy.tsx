import React from 'react';
import Hero from '../components/Hero';

const makananPokok = [
  'Nasi Liwet',
  'Nasi Timbel',
  'Sayur Asem',
  'Soto Bandung',
  'Mie Kocok',
];
const olahanSayur = [
  'Karedok',
  'Lotek',
];
const jajananLauk = [
  'Tahu Sumedang',
  'Batagor',
  'Cireng',
  'Combro',
  'Misro',
];
const kueCamilan = [
  'Surabi',
  'Colenak',
  'Peuyeum',
];
const ciriKhas = [
  'Mengandalkan kesegaran bahan alami dan lalapan',
  'Dominan rasa gurih, pedas, dan sedikit manis',
  'Banyak menggunakan fermentasi (contoh: oncom, peuyeum)',
  'Kaya akan olahan aci (cireng, cilok, combro)',
  'Sering disajikan dengan sambal dan bumbu kacang',
];
const resep = [
  {
    nama: 'Nasi Liwet',
    bahan: [
      '2 cup beras',
      '400ml santan kental',
      '2 lembar daun salam',
      '2 batang serai, geprek',
      '1 sdt garam',
      'Air secukupnya',
    ],
    cara: [
      'Cuci beras hingga bersih',
      'Campur santan dengan air (perbandingan 1:1)',
      'Masak beras dengan campuran santan, tambahkan daun salam, serai, dan garam',
      'Masak hingga air menyusut, lalu pindahkan ke rice cooker atau kukus hingga matang',
      'Sajikan dengan ayam goreng, tahu, tempe, sambal, dan lalapan',
    ],
  },
  {
    nama: 'Karedok',
    bahan: [
      '100g timun, potong tipis',
      '100g kacang panjang, potong 2cm',
      '100g kol, iris tipis',
      '50g tauge',
      '20 lembar kemangi',
      '2 buah tahu, potong dadu (opsional)',
      'Bumbu kacang: kacang tanah goreng, bawang putih, cabai rawit, terasi bakar, gula merah, garam, air asam jawa, air matang',
    ],
    cara: [
      'Haluskan semua bumbu kacang',
      'Tambahkan air sedikit demi sedikit hingga kekentalan diinginkan',
      'Campur semua sayuran dalam mangkuk besar',
      'Siram dengan bumbu kacang, aduk rata',
      'Sajikan segera agar sayuran tetap segar',
    ],
  },
  {
    nama: 'Soto Bandung',
    bahan: [
      '500g daging sapi, potong kotak',
      '2 buah lobak, potong bulat',
      '100g kacang kedelai putih, rebus',
      '2 liter air',
      'Bumbu halus: bawang merah, bawang putih, jahe, kunyit, ketumbar, kemiri',
      'Pelengkap: serai, daun salam, lengkuas, garam, penyedap',
    ],
    cara: [
      'Rebus daging dengan air hingga empuk',
      'Tumis bumbu halus hingga harum',
      'Masukkan tumisan bumbu ke dalam kuah daging',
      'Tambahkan pelengkap, masak lobak dan kacang kedelai hingga matang',
      'Bumbui, sajikan dengan bawang goreng dan kerupuk',
    ],
  },
  {
    nama: 'Cireng',
    bahan: [
      '250g tepung tapioka',
      '1 sdt garam',
      '1 sdt penyedap rasa',
      '300ml air panas',
      'Minyak untuk menggoreng',
      'Bumbu celup: cabai rawit, bawang putih, garam, gula, kecap manis, saus sambal',
    ],
    cara: [
      'Campurkan tepung tapioka, garam, penyedap',
      'Tuang air panas sedikit demi sedikit sambil diaduk',
      'Uleni hingga kalis dan tidak lengket',
      'Bentuk bulatan kecil',
      'Goreng hingga kecokelatan, sajikan dengan bumbu celup',
    ],
  },
  {
    nama: 'Batagor',
    bahan: [
      '10 buah tahu putih, belah tengah',
      '200g ikan tenggiri, haluskan',
      '2 sdm tepung tapioka',
      '1 butir telur',
      'Bumbu kacang: kacang tanah goreng, cabai merah, bawang putih, garam, gula merah, kecap manis, air matang',
    ],
    cara: [
      'Campur ikan tenggiri halus dengan tepung, telur, garam, merica',
      'Isi tahu dengan adonan ikan',
      'Goreng hingga kecokelatan',
      'Haluskan bumbu kacang, siram batagor, sajikan dengan kerupuk dan sambal',
    ],
  },
  {
    nama: 'Combro',
    bahan: [
      '300g singkong, parut kasar',
      'Isian: oncom, bawang merah, bawang putih, cabai rawit, garam, gula',
    ],
    cara: [
      'Tumis isian hingga matang',
      'Campur parutan singkong dengan garam dan penyedap',
      'Isi singkong dengan tumisan oncom, bentuk bulat',
      'Goreng hingga kecokelatan',
    ],
  },
  {
    nama: 'Surabi',
    bahan: [
      '300g tepung beras',
      '400ml santan',
      '1 sdt garam',
      '1 sdt ragi instan',
      '1 sdm gula pasir',
      'Topping kinca: santan, gula merah, daun pandan, garam',
    ],
    cara: [
      'Campur bahan, diamkan 30 menit',
      'Tuang adonan ke cetakan, masak hingga matang',
      'Masak topping kinca hingga kental',
      'Sajikan surabi dengan kinca',
    ],
  },
  {
    nama: 'Peuyeum',
    bahan: [
      '1 kg singkong, kupas dan potong',
      '2 tablet ragi tape',
      'Daun pisang untuk membungkus',
    ],
    cara: [
      'Kukus singkong hingga matang',
      'Dinginkan, taburkan ragi, bungkus daun pisang',
      'Simpan 2-3 hari, siap dimakan',
    ],
  },
  {
    nama: 'Colenak',
    bahan: [
      '500g tape singkong',
      'Saus gula merah: gula merah, santan, daun pandan, garam',
      'Kelapa parut, keju parut (opsional)',
    ],
    cara: [
      'Masak saus gula merah hingga kental',
      'Bakar tape singkong, siram saus, taburi kelapa dan keju',
    ],
  },
  {
    nama: 'Misro',
    bahan: [
      '300g singkong, parut kasar',
      'Isian gula merah cair: gula merah, air, daun pandan, garam',
    ],
    cara: [
      'Masak isian gula merah hingga kental dan dingin',
      'Isi singkong dengan gula merah, bentuk bulat',
      'Goreng hingga kecokelatan',
    ],
  },
];

const Gastronomy = () => {
  return (
    <div>
      <Hero
        title="Gastronomy Jawa Barat"
        subtitle="Kuliner khas Sunda yang segar, gurih, dan kaya tradisi"
        backgroundImage="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="bg-stone-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Makanan Khas Jawa Barat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gastronomi Sunda mengutamakan bahan segar, rasa gurih, pedas, dan fermentasi. Berikut daftar makanan pokok, jajanan, dan camilan khas beserta resepnya.</p>
          </div>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden" style={{backgroundImage: "url('https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Makanan Pokok & Utama</h3>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {makananPokok.map((m, i) => (
                    <li key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden" style={{backgroundImage: "url('https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Olahan Sayur & Sambal</h3>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {olahanSayur.map((m, i) => (
                    <li key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden" style={{backgroundImage: "url('https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Jajanan & Lauk Pendamping</h3>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {jajananLauk.map((m, i) => (
                    <li key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden" style={{backgroundImage: "url('https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Kue & Camilan Manis</h3>
                <ul className="flex flex-wrap gap-2 justify-center">
                  {kueCamilan.map((m, i) => (
                    <li key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow">{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-8 rounded-xl shadow-lg p-6 relative overflow-hidden" style={{backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative">
              <h3 className="text-xl font-bold text-green-700 mb-2">Ciri Khas Gastronomi Jawa Barat</h3>
              <ul className="list-disc ml-6 text-gray-700">
                {ciriKhas.map((c, i) => (
                  <li key={i} className="mb-1">{c}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mb-8 relative overflow-hidden rounded-xl shadow-lg p-6" style={{backgroundImage: "url('https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=800&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-white/60"></div>
            <div className="relative">
              <h3 className="text-xl font-bold text-green-700 mb-2">Resep Makanan Khas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resep.map((r, i) => (
                  <div key={i} className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-lg p-6 border border-green-200">
                    <h4 className="font-bold text-lg text-green-800 mb-2">{r.nama}</h4>
                    <div className="mb-2">
                      <span className="font-semibold">Bahan:</span>
                      <ul className="list-disc ml-6 text-sm">
                        {r.bahan.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-semibold">Cara Membuat:</span>
                      <ol className="list-decimal ml-6 text-sm">
                        {r.cara.map((c, k) => (
                          <li key={k}>{c}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastronomy;