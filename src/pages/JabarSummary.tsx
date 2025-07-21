import React from 'react';
import { Mountain, Globe, Leaf, Star } from 'lucide-react';

const JabarSummary: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 pb-16">
      {/* Hero Background Section */}
      <div className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center mb-10 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&fit=crop&w=1200&q=80" alt="Jawa Barat Mountain Lake" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-700/30 to-green-600/10 z-10" />
        <div className="relative z-20 w-full text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-6 pt-16 drop-shadow-lg tracking-tight md:text-6xl">
            Jawa Barat Lestari<br className="hidden md:block" />
            <span className="text-2xl font-semibold text-yellow-200 block mt-2 md:text-3xl">Ringkasan Alam & Kalender</span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Gunung */}
          <div className="relative rounded-2xl shadow-lg p-8 border border-green-200 backdrop-blur-md bg-white/30 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&fit=crop&w=800&q=80' alt='Gunung' className='absolute inset-0 w-full h-full object-cover opacity-30 z-0' />
            <div className='relative z-10'>
              <h2 className="text-2xl font-extrabold text-green-900 mb-3 flex items-center gap-2 font-serif drop-shadow-lg group-hover:text-emerald-700 transition-colors duration-300"><Mountain className="inline-block h-6 w-6 text-green-700 group-hover:text-emerald-700 transition-colors duration-300" /> Gunung di Jawa Barat</h2>
              <p className="text-green-900 text-base mb-3 font-medium">Jawa Barat memiliki banyak gunung, terutama karena merupakan bagian dari Cincin Api Pasifik.<br />Jumlah Gunung: <span className="font-bold">± 30 gunung</span></p>
              <ul className="list-disc ml-5 text-green-900 text-base font-semibold">
                <li>Gunung Gede (2.958 mdpl)</li>
                <li>Gunung Pangrango (3.019 mdpl)</li>
                <li>Gunung Tangkuban Perahu (2.084 mdpl)</li>
                <li>Gunung Ciremai (3.078 mdpl – tertinggi di Jabar)</li>
                <li>Gunung Papandayan</li>
                <li>Gunung Galunggung</li>
              </ul>
            </div>
          </div>
          {/* Pantai */}
          <div className="relative rounded-2xl shadow-lg p-8 border border-blue-200 backdrop-blur-md bg-white/30 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <img src='https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&fit=crop&w=800&q=80' alt='Pantai' className='absolute inset-0 w-full h-full object-cover opacity-30 z-0' />
            <div className='relative z-10'>
              <h2 className="text-xl font-bold text-blue-900 mb-2 flex items-center gap-2 font-serif drop-shadow-lg group-hover:text-blue-700 transition-colors duration-300"><Globe className="inline-block h-5 w-5 text-blue-700 group-hover:text-blue-900 transition-colors duration-300" /> Pantai di Jawa Barat</h2>
              <p className="text-blue-900 text-sm mb-2 font-medium">Pantai-pantai di Jawa Barat umumnya berada di pesisir selatan, menghadap Samudra Hindia.<br />Jumlah Pantai: <span className="font-semibold">± 40 pantai</span></p>
              <ul className="list-disc ml-5 text-blue-900 text-sm font-semibold">
                <li>Pantai Pangandaran</li>
                <li>Pantai Batu Karas</li>
                <li>Pantai Santolo</li>
                <li>Pantai Ujung Genteng</li>
                <li>Pantai Karang Hawu</li>
                <li>Pantai Pelabuhan Ratu</li>
              </ul>
            </div>
          </div>
          {/* Taman/Kawasan Konservasi */}
          <div className="relative rounded-2xl shadow-lg p-8 border border-emerald-200 backdrop-blur-md bg-white/30 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            <img src='https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&fit=crop&w=800&q=80' alt='Taman' className='absolute inset-0 w-full h-full object-cover opacity-30 z-0' />
            <div className='relative z-10'>
              <h2 className="text-xl font-bold text-emerald-900 mb-2 flex items-center gap-2 font-serif drop-shadow-lg group-hover:text-emerald-700 transition-colors duration-300"><Leaf className="inline-block h-5 w-5 text-emerald-700 group-hover:text-emerald-900 transition-colors duration-300" /> Taman & Kawasan Konservasi</h2>
              <p className="text-emerald-900 text-sm mb-2 font-medium">Termasuk taman nasional, taman wisata alam, dan taman kota.<br />Jumlah: <span className="font-semibold">± 15 kawasan besar</span></p>
              <ul className="list-disc ml-5 text-emerald-900 text-sm font-semibold">
                <li>Taman Nasional Gunung Gede Pangrango</li>
                <li>Taman Nasional Gunung Halimun Salak</li>
                <li>Taman Wisata Alam Pangandaran</li>
                <li>Taman Hutan Raya Ir. H. Djuanda (Dago Pakar)</li>
                <li>Taman Kota Bandung, Taman Balai Kota, Taman Lalu Lintas</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Kalender Rekomendasi */}
        <div className="relative rounded-2xl shadow-lg p-8 mb-10 border border-yellow-200 backdrop-blur-md bg-white/30 hover:bg-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
          <img src='https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&fit=crop&w=800&q=80' alt='Kalender' className='absolute inset-0 w-full h-full object-cover opacity-30 z-0' />
          <div className='relative z-10'>
            <h2 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2 font-serif drop-shadow-lg group-hover:text-yellow-700 transition-colors duration-300"><Star className="inline-block h-6 w-6 text-yellow-500 group-hover:text-yellow-700 transition-colors duration-300" /> Kalender Rekomendasi<span className="text-yellow-700 font-semibold"></span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bulanan */}
            <div>
              <span className="font-semibold text-green-700">Januari – Bersih Awal Tahun</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Bersih-bersih Pantai Pangandaran</li>
                <li>Kampanye #BawaSampahmu</li>
                <li>Edukasi daur ulang di taman kota</li>
                <li><span className="italic">Cirebon, Tasikmalaya, Garut</span></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Februari – Festival Cinta Alam</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Camping Romantis Ramah Lingkungan (di Gunung Papandayan atau Lembang)</li>
                <li>Penanaman pohon pasangan (Tree of Love)</li>
                <li>Workshop eco-craft</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Maret – Musim Menanam</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Penanaman pohon di kawasan rawan longsor</li>
                <li>Edukasi pelestarian flora lokal di Tahura Djuanda</li>
                <li>Kolaborasi dengan komunitas petani organik</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">April – Bulan Air dan Sungai</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Bersih Sungai Citarum</li>
                <li>Festival Air Bersih</li>
                <li>Edukasi pengelolaan air rumah tangga</li>
                <li><span className="italic">Bandung, Karawang, Purwakarta</span></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Mei – Peringatan Hari Lingkungan Hidup</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Eco Walk</li>
                <li>Seminar dan Webinar Lingkungan</li>
                <li>Pameran produk hijau & UMKM ramah lingkungan</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Juni – Wisata Edukasi Anak Sekolah</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Wisata ke Kebun Raya Cibodas</li>
                <li>Program edukasi taman nasional untuk pelajar</li>
                <li>Eco-camp dengan permainan tradisional</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Juli – Peduli Kawasan Rawan Kebakaran</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Simulasi tanggap darurat di kawasan konservasi</li>
                <li>Sosialisasi pertanian berkelanjutan</li>
                <li>Dokumentasi kehidupan satwa di musim kering</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Agustus – Merdeka dengan Aksi Hijau</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Lomba 17-an bertema lingkungan</li>
                <li>Dekor kampung dengan bahan daur ulang</li>
                <li>Upacara bendera di puncak gunung</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">September – Bulan Sejuta Pohon</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Penanaman pohon di kawasan Ciremai & Halimun Salak</li>
                <li>“1 orang 1 pohon” campaign</li>
                <li>Kolaborasi komunitas & instansi</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Oktober – Festival Budaya Lestari</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Festival Ngalaksa, Seren Taun</li>
                <li>Fashion show kain tradisional dari limbah</li>
                <li>Kuliner lokal organik</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">November – Menyambut Musim Hujan</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Workshop ketahanan pangan lokal</li>
                <li>Kegiatan mitigasi banjir komunitas</li>
                <li>Pelatihan warga tanggap bencana</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-700">Desember – Refleksi Hijau Akhir Tahun</span>
              <ul className="list-disc ml-5 text-gray-700 text-sm">
                <li>Awarding “Warga Lestari” & “Desa Hijau”</li>
                <li>Festival musik akustik alam</li>
                <li>Pameran foto perubahan alam sepanjang tahun</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JabarSummary;
