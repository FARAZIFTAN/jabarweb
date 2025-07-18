import { useState } from 'react';
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
  // Makanan Pokok & Utama
  {
    nama: 'Nasi Liwet',
    bahan: [
      '2 gelas beras (cuci bersih)',
      '400 ml santan kental',
      '2 gelas air',
      '2 lembar daun salam',
      '2 batang serai (geprek)',
      '1 sdt garam',
      '1 sdt gula pasir',
      'Bumbu halus:',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '2 cm jahe',
      '1 sdt ketumbar',
      '1/2 sdt jintan',
    ],
    cara: [
      'Persiapan:',
      '1. Haluskan semua bumbu dengan blender atau ulekan',
      '2. Geprek serai dan daun salam',
      'Memasak:',
      '1. Panaskan wajan atau panci tebal',
      '2. Tumis bumbu halus hingga harum dan matang (sekitar 3-4 menit)',
      '3. Masukkan beras, aduk rata dengan bumbu selama 2 menit',
      '4. Tuang santan dan air secara bertahap sambil terus diaduk',
      '5. Tambahkan daun salam, serai, garam, dan gula',
      '6. Masak dengan api sedang sambil terus diaduk hingga air menyusut dan beras setengah matang',
      '7. Kecilkan api, tutup panci, dan masak hingga nasi matang sempurna (sekitar 15-20 menit)',
      '8. Sesekali buka tutup dan aduk perlahan agar tidak gosong',
      'Tips:',
      '• Gunakan api kecil saat menanak agar tidak gosong',
      '• Bisa ditambah ayam suwir atau telur rebus sebagai pelengkap',
      '• Sajikan hangat dengan kerupuk dan lalapan',
    ],
  },
  {
    nama: 'Nasi Timbel',
    bahan: [
      '2 gelas beras (cuci bersih)',
      '2½ gelas air',
      '1 sdt garam',
      'Daun pisang secukupnya (untuk membungkus)',
      'Bumbu:',
      '3 siung bawang merah (iris tipis)',
      '2 siung bawang putih (iris tipis)',
      '2 lembar daun salam',
      '1 batang serai (geprek)',
      '1 sdt garam',
      '1 sdm minyak goreng',
    ],
    cara: [
      'Persiapan daun pisang:',
      '1. Cuci daun pisang hingga bersih',
      '2. Layukan sebentar di atas api atau rebus sebentar agar lentur',
      '3. Potong daun pisang sesuai ukuran yang diinginkan',
      'Masak nasi:',
      '1. Panaskan minyak, tumis bawang merah dan bawang putih hingga harum',
      '2. Masukkan beras, aduk hingga tercampur dengan bumbu',
      '3. Tambahkan air, garam, daun salam, dan serai',
      '4. Masak hingga air menyusut dan beras setengah matang',
      '5. Pindahkan ke dandang atau kukusan, kukus selama 20-25 menit hingga matang',
      'Membungkus:',
      '1. Ambil selembar daun pisang',
      '2. Letakkan nasi secukupnya di tengah daun',
      '3. Bungkus dengan rapi, lipat kedua ujungnya',
      '4. Sematkan dengan lidi atau tusuk gigi',
      'Mengukus timbel:',
      '1. Susun bungkusan nasi timbel dalam kukusan',
      '2. Kukus selama 15-20 menit hingga daun pisang layu dan aromanya harum',
      'Pelengkap tradisional:',
      '• Ayam goreng atau ayam bakar',
      '• Ikan asin jambal roti',
      '• Tahu goreng dan tempe goreng',
      '• Lalapan (kubis, tomat, timun, kemangi)',
      '• Sambal terasi atau sambal kacang',
    ],
  },
  {
    nama: 'Sayur Asem',
    bahan: [
      '200 gr kacang panjang (potong 3 cm)',
      '150 gr kangkung (potong-potong)',
      '100 gr tauge',
      '2 buah jagung manis (potong bulat)',
      '1 buah labu siam (potong kotak)',
      '100 gr kacang tanah (rebus setengah matang)',
      '2 buah tomat (potong-potong)',
      'Bumbu halus:',
      '5 siung bawang merah',
      '3 siung bawang putih',
      '3 buah cabai merah keriting',
      '2 buah cabai rawit (sesuai selera)',
      '1 sdt terasi bakar',
      '1 cm kencur',
      '1 sdt garam',
      'Bumbu pelengkap:',
      '2 lembar daun salam',
      '1 batang serai (geprek)',
      '3 cm lengkuas (geprek)',
      '2 sdm air asam jawa',
      '1 sdt gula merah',
      '1 sdt garam',
      '1 liter air',
    ],
    cara: [
      'Persiapan:',
      '1. Rebus kacang tanah hingga setengah empuk, sisihkan',
      '2. Rendam asam jawa dengan air hangat, peras dan ambil airnya',
      '3. Haluskan semua bumbu halus',
      'Memasak:',
      '1. Rebus air hingga mendidih',
      '2. Masukkan bumbu halus, daun salam, serai, dan lengkuas',
      '3. Masak hingga harum dan bumbu matang (sekitar 5 menit)',
      '4. Masukkan jagung dan kacang tanah rebus, masak 5 menit',
      '5. Tambahkan labu siam, masak hingga setengah empuk',
      '6. Masukkan kacang panjang, masak 3 menit',
      '7. Tambahkan air asam jawa, gula merah, dan garam',
      '8. Masukkan tomat, masak 2 menit',
      '9. Terakhir masukkan kangkung dan tauge, masak sebentar hingga layu',
      '10. Koreksi rasa, angkat dan sajikan',
      'Tips:',
      '• Jangan terlalu lama memasak sayuran hijau agar tetap renyah',
      '• Bisa ditambah melinjo atau daun melinjo untuk rasa yang lebih khas',
      '• Sajikan dengan nasi hangat dan kerupuk',
      '• Bisa ditambah daging sapi atau ayam untuk variasi',
    ],
  },
  {
    nama: 'Soto Bandung',
    bahan: [
      '500 gr daging sapi (has dalam/sandung lamur)',
      '200 gr babat sapi (bersihkan dan potong)',
      '100 gr kikil sapi',
      '2 liter air',
      '200 gr kacang kedelai putih (rendam semalaman)',
      '100 gr taoge',
      '2 buah kentang (potong kotak, goreng)',
      '2 buah tomat (potong-potong)',
      'Daun seledri dan bawang goreng untuk taburan',
      'Bumbu halus:',
      '8 siung bawang merah',
      '5 siung bawang putih',
      '5 buah cabai merah keriting',
      '3 buah cabai rawit (sesuai selera)',
      '1 sdt ketumbar',
      '1 cm jahe',
      '1 cm kunyit',
      '1 sdt garam',
      'Bumbu pelengkap:',
      '3 lembar daun salam',
      '2 batang serai (geprek)',
      '3 cm lengkuas (geprek)',
      '1 sdt garam',
      '1 sdt gula pasir',
      '1 sdt merica bubuk',
    ],
    cara: [
      'Persiapan:',
      '1. Rebus daging sapi, babat, dan kikil hingga empuk (sekitar 1-1.5 jam)',
      '2. Angkat daging, potong-potong, saring dan sisihkan kaldunya',
      '3. Rebus kacang kedelai hingga empuk, tiriskan',
      '4. Haluskan semua bumbu halus',
      'Membuat kuah:',
      '1. Panaskan minyak, tumis bumbu halus hingga harum dan matang',
      '2. Masukkan daun salam, serai, dan lengkuas',
      '3. Tuang kaldu daging, didihkan',
      '4. Masukkan daging, babat, kikil yang sudah dipotong',
      '5. Tambahkan garam, gula, dan merica',
      '6. Masak hingga bumbu meresap (sekitar 15 menit)',
      '7. Masukkan kacang kedelai dan kentang goreng',
      '8. Terakhir masukkan tomat, masak sebentar',
      'Penyajian:',
      '1. Siapkan mangkuk, taruh taoge mentah',
      '2. Tuang kuah soto beserta isinya',
      '3. Taburi dengan daun seledri dan bawang goreng',
      '4. Sajikan dengan nasi hangat, kerupuk, dan sambal',
      'Pelengkap:',
      '• Emping goreng',
      '• Kerupuk udang',
      '• Sambal rawit',
      '• Jeruk nipis',
      'Tips:',
      '• Gunakan api kecil saat merebus daging agar empuk merata',
      '• Bisa ditambah santan sedikit untuk kuah yang lebih gurih',
      '• Taoge sebaiknya mentah untuk tekstur yang renyah',
    ],
  },
  {
    nama: 'Mie Kocok',
    bahan: [
      '500 gr mie kuning segar',
      '300 gr daging sapi (has dalam/sandung lamur)',
      '200 gr babat sapi (bersihkan dan potong)',
      '100 gr kikil sapi',
      '2 liter air untuk kaldu',
      '200 gr taoge',
      '2 batang daun bawang (iris halus)',
      '2 batang seledri (iris halus)',
      'Bawang goreng untuk taburan',
      'Bumbu halus:',
      '6 siung bawang merah',
      '4 siung bawang putih',
      '3 buah cabai merah keriting',
      '2 buah cabai rawit (sesuai selera)',
      '1 sdt ketumbar',
      '1 cm jahe',
      '1 cm kunyit',
      '1 sdt garam',
      'Bumbu pelengkap:',
      '3 lembar daun salam',
      '2 batang serai (geprek)',
      '3 cm lengkuas (geprek)',
      '1 sdt garam',
      '1 sdt gula pasir',
      '1 sdt merica bubuk',
    ],
    cara: [
      'Membuat kaldu:',
      '1. Rebus daging sapi, babat, dan kikil dengan air hingga empuk (1-1.5 jam)',
      '2. Angkat daging, potong-potong sesuai selera',
      '3. Saring kaldu dan sisihkan',
      'Membuat bumbu kuah:',
      '1. Haluskan semua bumbu halus',
      '2. Panaskan minyak, tumis bumbu halus hingga harum dan matang',
      '3. Masukkan daun salam, serai, dan lengkuas',
      '4. Tuang kaldu daging, didihkan',
      '5. Masukkan potongan daging, babat, dan kikil',
      '6. Tambahkan garam, gula, dan merica',
      '7. Masak hingga bumbu meresap (sekitar 15 menit)',
      '8. Koreksi rasa',
      'Persiapan mie:',
      '1. Rebus mie kuning hingga al dente',
      '2. Tiriskan dan bilas dengan air dingin',
      '3. Rebus taoge sebentar hingga layu, tiriskan',
      'Penyajian:',
      '1. Taruh mie dan taoge dalam mangkuk',
      '2. Tuang kuah panas beserta isinya',
      '3. Taburi dengan daun bawang, seledri, dan bawang goreng',
      '4. Sajikan dengan pelengkap',
      'Pelengkap:',
      '• Kerupuk udang atau kerupuk mie',
      '• Sambal rawit',
      '• Jeruk nipis',
      '• Acar timun',
      'Tips:',
      '• Jangan terlalu lama merebus mie agar tidak lembek',
      '• Kuah harus panas saat disajikan',
      '• Bisa ditambah telur rebus untuk variasi',
      '• Gunakan mie kuning segar untuk hasil terbaik',
    ],
  },
  // Olahan Sayur & Sambal
  {
    nama: 'Karedok',
    bahan: [
      '100 gr kol (iris tipis)',
      '100 gr taoge (siangi)',
      '1 buah timun (iris tipis)',
      '100 gr kacang panjang (potong 2 cm)',
      '100 gr kangkung (ambil daunnya)',
      '2 buah tomat (potong-potong)',
      '50 gr daun kemangi',
      '1 buah terong ungu kecil (iris tipis, opsional)',
      'Bumbu sambal karedok:',
      '5 buah cabai rawit (sesuai selera)',
      '2 buah cabai merah keriting',
      '3 siung bawang putih',
      '1 sdt terasi bakar',
      '2 sdm kacang tanah goreng',
      '1 sdt gula merah',
      '1 sdt garam',
      '1 sdm air asam jawa',
      'Air matang secukupnya',
    ],
    cara: [
      'Persiapan sayuran:',
      '1. Cuci bersih semua sayuran',
      '2. Potong-potong sesuai selera',
      '3. Rendam dalam air dingin agar tetap segar',
      '4. Tiriskan sebelum dihidangkan',
      'Membuat sambal:',
      '1. Goreng kacang tanah hingga matang, haluskan',
      '2. Bakar terasi sebentar hingga harum',
      '3. Haluskan semua bumbu sambal dengan cobek atau blender',
      '4. Tambahkan kacang tanah halus, aduk rata',
      '5. Beri air asam jawa dan sedikit air matang',
      '6. Aduk hingga bumbu tercampur rata dan tidak terlalu kental',
      'Penyajian:',
      '1. Tata semua sayuran dalam piring saji',
      '2. Siram dengan sambal karedok',
      '3. Aduk rata hingga semua sayuran tercampur bumbu',
      '4. Sajikan segera selagi segar',
      'Pelengkap:',
      '• Kerupuk udang atau kerupuk kampung',
      '• Emping goreng',
      '• Nasi putih hangat',
      'Tips:',
      '• Semua sayuran harus mentah dan segar',
      '• Jangan terlalu lama mengaduk agar sayuran tidak layu',
      '• Bumbu sambal bisa disesuaikan tingkat kepedasan',
      '• Lebih nikmat jika dimakan segera setelah dibuat',
      '• Bisa ditambah pete atau jengkol untuk variasi',
    ],
  },
  {
    nama: 'Lotek',
    bahan: [
      '100 gr kol (iris tipis)',
      '100 gr taoge (siangi)',
      '100 gr kacang panjang (potong 3 cm)',
      '100 gr kangkung (ambil daun dan batang muda)',
      '1 buah timun (iris tipis)',
      '100 gr bayam (ambil daun dan batang muda)',
      '2 buah tomat (potong-potong)',
      '50 gr daun kemangi',
      '2 buah tahu putih (potong kotak, goreng)',
      '1 buah tempe (potong kotak, goreng)',
      'Bumbu sambal lotek:',
      '6 buah cabai rawit (sesuai selera)',
      '2 buah cabai merah keriting',
      '4 siung bawang putih',
      '1 sdt terasi bakar',
      '100 gr kacang tanah goreng',
      '2 sdm gula merah',
      '1 sdt garam',
      '2 sdm air asam jawa',
      'Air matang secukupnya',
    ],
    cara: [
      'Persiapan sayuran:',
      '1. Cuci bersih semua sayuran',
      '2. Rebus kacang panjang, kangkung, dan bayam sebentar hingga layu',
      '3. Rebus taoge sebentar (30 detik), tiriskan',
      '4. Rebus kol sebentar hingga agak empuk',
      '5. Tiriskan semua sayuran yang direbus dan dinginkan',
      '6. Goreng tahu dan tempe hingga kuning keemasan',
      'Membuat sambal:',
      '1. Goreng kacang tanah hingga matang dan harum',
      '2. Haluskan kacang tanah hingga halus',
      '3. Bakar terasi sebentar hingga harum',
      '4. Haluskan cabai, bawang putih, dan terasi dengan cobek',
      '5. Campurkan dengan kacang tanah halus',
      '6. Tambahkan gula merah, garam, dan air asam jawa',
      '7. Beri air matang sedikit demi sedikit sambil diaduk hingga kekentalan pas',
      'Penyajian:',
      '1. Tata semua sayuran dalam piring saji',
      '2. Tambahkan tahu dan tempe goreng',
      '3. Siram dengan sambal lotek',
      '4. Aduk rata hingga semua bahan tercampur bumbu',
      '5. Sajikan segera',
      'Pelengkap:',
      '• Kerupuk udang atau kerupuk kampung',
      '• Emping goreng',
      '• Lontong atau nasi putih',
      'Tips:',
      '• Jangan terlalu lama merebus sayuran agar tetap renyah',
      '• Sambal sebaiknya tidak terlalu encer atau kental',
      '• Bisa ditambah telur rebus untuk variasi',
      '• Sajikan dalam kondisi suhu ruang untuk rasa terbaik',
      '• Kacang tanah harus benar-benar halus agar sambal tidak kasar',
    ],
  },
  // Jajanan & Lauk Pendamping
  {
    nama: 'Tahu Sumedang',
    bahan: [
      '10 buah tahu putih (ukuran sedang)',
      'Minyak goreng secukupnya untuk menggoreng',
      'Bumbu isian:',
      '3 siung bawang putih (cincang halus)',
      '2 siung bawang merah (cincang halus)',
      '2 buah cabai rawit (cincang halus, opsional)',
      '1 batang daun bawang (iris halus)',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '1 sdt penyedap rasa (opsional)',
      'Adonan tepung:',
      '100 gr tepung terigu',
      '50 gr tepung beras',
      '1 sdt garam',
      '1/2 sdt baking powder',
      '150 ml air es',
      '1 butir telur',
    ],
    cara: [
      'Persiapan tahu:',
      '1. Belah tahu menjadi dua bagian, tapi jangan sampai putus',
      '2. Keluarkan sebagian isi tahu dengan sendok, sisakan dinding sekitar 0,5 cm',
      '3. Haluskan isi tahu yang dikeluarkan',
      'Membuat isian:',
      '1. Panaskan sedikit minyak',
      '2. Tumis bawang putih dan bawang merah hingga harum',
      '3. Masukkan cabai rawit (jika pakai), tumis sebentar',
      '4. Tambahkan isi tahu yang sudah dihaluskan',
      '5. Beri garam, merica, dan penyedap rasa',
      '6. Masak hingga bumbu meresap dan agak kering',
      '7. Tambahkan daun bawang, aduk rata, angkat dan dinginkan',
      'Membuat adonan tepung:',
      '1. Campurkan tepung terigu, tepung beras, garam, dan baking powder',
      '2. Kocok telur, masukkan ke dalam tepung',
      '3. Tambahkan air es sedikit demi sedikit sambil diaduk hingga kekentalan pas',
      '4. Adonan tidak boleh terlalu kental atau terlalu encer',
      'Menggoreng:',
      '1. Isi tahu dengan bumbu isian, tekan-tekan agar padat',
      '2. Celupkan tahu ke dalam adonan tepung hingga rata',
      '3. Panaskan minyak dengan api sedang',
      '4. Goreng tahu hingga kuning keemasan dan renyah',
      '5. Angkat dan tiriskan',
      'Tips:',
      '• Gunakan api sedang agar matang merata',
      '• Jangan terlalu panas minyaknya agar tidak gosong',
      '• Adonan tepung harus dingin untuk hasil yang renyah',
      '• Bisa ditambah wortel cincang atau jamur untuk variasi isian',
      '• Goreng dalam minyak yang banyak agar hasil maksimal',
      'Penyajian: Sajikan tahu Sumedang hangat dengan:',
      '• Sambal kacang',
      '• Sambal rawit',
      '• Kecap manis',
      '• Cabe rawit utuh',
    ],
  },
  {
    nama: 'Batagor',
    bahan: [
      '6 buah tahu putih (ukuran sedang)',
      '300 gr ikan tenggiri (fillet, buang duri)',
      '100 gr tepung tapioka',
      '1 butir telur',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '1/2 sdt penyedap rasa',
      'Es batu secukupnya',
      'Minyak goreng untuk menggoreng',
      'Adonan tepung pelapis:',
      '100 gr tepung terigu',
      '50 gr tepung beras',
      '1 sdt garam',
      '1/2 sdt baking powder',
      '200 ml air es',
      'Bumbu sambal kacang:',
      '200 gr kacang tanah (goreng)',
      '5 buah cabai merah keriting',
      '3 buah cabai rawit (sesuai selera)',
      '4 siung bawang putih',
      '1 sdt terasi bakar',
      '2 sdm gula merah',
      '1 sdt garam',
      '2 sdm air asam jawa',
      'Air matang secukupnya',
    ],
    cara: [
      'Membuat adonan ikan:',
      '1. Haluskan ikan tenggiri dengan food processor atau blender',
      '2. Tambahkan es batu sedikit demi sedikit sambil diblender',
      '3. Masukkan telur, garam, merica, dan penyedap rasa',
      '4. Tambahkan tepung tapioka, aduk hingga kalis dan elastis',
      '5. Tes adonan dengan merebus sedikit, jika mengapung berarti sudah siap',
      'Persiapan tahu:',
      '1. Belah tahu menjadi segitiga atau sesuai selera',
      '2. Keluarkan sebagian isi tahu, sisakan dinding 0,5 cm',
      '3. Isi dengan adonan ikan, ratakan permukaannya',
      'Membuat adonan pelapis:',
      '1. Campurkan tepung terigu, tepung beras, garam, dan baking powder',
      '2. Tambahkan air es sedikit demi sedikit sambil diaduk',
      '3. Adonan harus kekentalan sedang, tidak terlalu kental atau encer',
      'Menggoreng batagor:',
      '1. Panaskan minyak dengan api sedang',
      '2. Celupkan tahu isi ke dalam adonan tepung',
      '3. Goreng hingga kuning keemasan dan matang',
      '4. Angkat dan tiriskan',
      'Membuat sambal kacang:',
      '1. Haluskan kacang tanah yang sudah digoreng',
      '2. Haluskan cabai, bawang putih, dan terasi',
      '3. Campurkan semua bumbu halus',
      '4. Tambahkan gula merah, garam, dan air asam jawa',
      '5. Beri air matang hingga kekentalan pas',
      'Penyajian:',
      '1. Potong-potong batagor sesuai selera',
      '2. Tata dalam piring',
      '3. Siram dengan sambal kacang',
      '4. Taburi dengan:',
      'o Bawang goreng',
      'o Daun seledri cincang',
      'o Kerupuk remah',
      'o Tahu goreng tambahan (potong dadu)',
      'Tips:',
      '• Gunakan ikan segar untuk hasil terbaik',
      '• Jangan terlalu panas minyaknya agar tidak gosong',
      '• Adonan ikan harus benar-benar halus dan elastis',
      '• Bisa ditambah udang cincang untuk variasi',
      '• Sambal kacang sebaiknya tidak terlalu encer',
    ],
  },
  {
    nama: 'Cireng',
    bahan: [
      '250 gr tepung tapioka',
      '200 ml air',
      '1 sdt garam',
      '1/2 sdt penyedap rasa',
      '1 batang daun bawang (iris halus)',
      'Minyak goreng secukupnya',
      'Bumbu isian (opsional):',
      '3 siung bawang putih (cincang halus)',
      '2 siung bawang merah (cincang halus)',
      '2 buah cabai rawit (cincang halus)',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '1 batang daun bawang (iris halus)',
      'Sambal cocolan:',
      '10 buah cabai rawit',
      '3 buah cabai merah keriting',
      '3 siung bawang putih',
      '1 sdt terasi bakar',
      '1 sdt gula merah',
      '1 sdt garam',
      '1 sdm air jeruk nipis',
    ],
    cara: [
      'Membuat adonan cireng:',
      '1. Didihkan air dengan garam dan penyedap rasa',
      '2. Masukkan tepung tapioka sedikit demi sedikit sambil diaduk cepat',
      '3. Aduk terus hingga adonan kalis dan tidak lengket',
      '4. Angkat dari api, diamkan hingga agak dingin',
      '5. Tambahkan daun bawang iris, aduk rata',
      '6. Uleni adonan hingga elastis dan mudah dibentuk',
      'Untuk cireng isi:',
      '1. Panaskan sedikit minyak',
      '2. Tumis bawang putih dan bawang merah hingga harum',
      '3. Masukkan cabai rawit, tumis sebentar',
      '4. Beri garam, merica, dan daun bawang',
      '5. Angkat dan dinginkan',
      'Membentuk cireng:',
      '1. Ambil adonan secukupnya, pipihkan',
      '2. Untuk cireng isi: letakkan isian di tengah, tutup dan bentuk bulat',
      '3. Untuk cireng polos: bentuk bulat atau sesuai selera',
      '4. Pastikan permukaan halus dan tidak ada celah',
      'Menggoreng:',
      '1. Panaskan minyak dengan api sedang',
      '2. Goreng cireng hingga mengapung dan berwarna keemasan',
      '3. Angkat dan tiriskan',
      'Membuat sambal:',
      '1. Bakar semua cabai dan bawang putih hingga layu',
      '2. Haluskan dengan terasi bakar',
      '3. Tambahkan gula merah, garam, dan air jeruk nipis',
      '4. Aduk rata',
      'Variasi cireng:',
      '• Cireng bumbu: Tambahkan bawang putih bubuk, kaldu bubuk ke adonan',
      '• Cireng keju: Isi dengan keju parut',
      '• Cireng udang: Tambahkan udang cincang ke adonan',
      '• Cireng sayur: Tambahkan wortel atau sawi cincang',
      'Tips:',
      '• Adonan harus benar-benar kalis agar tidak pecah saat digoreng',
      '• Gunakan api sedang agar matang merata',
      '• Jangan terlalu banyak menguleni agar tidak keras',
      '• Bentuk cireng saat adonan masih hangat',
      '• Goreng dalam minyak yang cukup panas',
      'Penyajian: Sajikan cireng hangat dengan:',
      '• Sambal rawit',
      '• Saus sambal botolan',
      '• Mayones',
      '• Saus tomat',
    ],
  },
  {
    nama: 'Combro',
    bahan: [
      '250 gr tepung tapioka',
      '200 ml air',
      '1 sdt garam',
      '1/2 sdt penyedap rasa',
      '1 batang daun bawang (iris halus)',
      'Minyak goreng secukupnya',
      'Bumbu isian (opsional):',
      '3 siung bawang putih (cincang halus)',
      '2 siung bawang merah (cincang halus)',
      '2 buah cabai rawit (cincang halus)',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '1 batang daun bawang (iris halus)',
      'Sambal cocolan:',
      '10 buah cabai rawit',
      '3 buah cabai merah keriting',
      '3 siung bawang putih',
      '1 sdt terasi bakar',
      '1 sdt gula merah',
      '1 sdt garam',
      '1 sdm air jeruk nipis',
    ],
    cara: [
      'Membuat adonan cireng:',
      '1. Didihkan air dengan garam dan penyedap rasa',
      '2. Masukkan tepung tapioka sedikit demi sedikit sambil diaduk cepat',
      '3. Aduk terus hingga adonan kalis dan tidak lengket',
      '4. Angkat dari api, diamkan hingga agak dingin',
      '5. Tambahkan daun bawang iris, aduk rata',
      '6. Uleni adonan hingga elastis dan mudah dibentuk',
      'Untuk cireng isi:',
      '1. Panaskan sedikit minyak',
      '2. Tumis bawang putih dan bawang merah hingga harum',
      '3. Masukkan cabai rawit, tumis sebentar',
      '4. Beri garam, merica, dan daun bawang',
      '5. Angkat dan dinginkan',
      'Membentuk cireng:',
      '1. Ambil adonan secukupnya, pipihkan',
      '2. Untuk cireng isi: letakkan isian di tengah, tutup dan bentuk bulat',
      '3. Untuk cireng polos: bentuk bulat atau sesuai selera',
      '4. Pastikan permukaan halus dan tidak ada celah',
      'Menggoreng:',
      '1. Panaskan minyak dengan api sedang',
      '2. Goreng cireng hingga mengapung dan berwarna keemasan',
      '3. Angkat dan tiriskan',
      'Membuat sambal:',
      '1. Bakar semua cabai dan bawang putih hingga layu',
      '2. Haluskan dengan terasi bakar',
      '3. Tambahkan gula merah, garam, dan air jeruk nipis',
      '4. Aduk rata',
      'Variasi cireng:',
      '• Cireng bumbu: Tambahkan bawang putih bubuk, kaldu bubuk ke adonan',
      '• Cireng keju: Isi dengan keju parut',
      '• Cireng udang: Tambahkan udang cincang ke adonan',
      '• Cireng sayur: Tambahkan wortel atau sawi cincang',
      'Tips:',
      '• Adonan harus benar-benar kalis agar tidak pecah saat digoreng',
      '• Gunakan api sedang agar matang merata',
      '• Jangan terlalu banyak menguleni agar tidak keras',
      '• Bentuk cireng saat adonan masih hangat',
      '• Goreng dalam minyak yang cukup panas',
      'Penyajian: Sajikan cireng hangat dengan:',
      '• Sambal rawit',
      '• Saus sambal botolan',
      '• Mayones',
      '• Saus tomat',
    ],
  },
  {
    nama: 'Misro',
    bahan: [
      '300 gr singkong parut (pilih yang tidak berair)',
      '150 gr kelapa parut',
      '100 gr gula merah (sisir halus)',
      '1 sdt garam',
      '1 lembar daun pandan (sobek-sobek)',
      'Minyak goreng secukupnya',
      'Bumbu tambahan:',
      '1/2 sdt vanili bubuk (opsional)',
      '1 sdm tepung terigu (jika adonan terlalu lembek)',
    ],
    cara: [
      'Persiapan bahan:',
      '1. Parut singkong dengan parutan kasar, peras airnya hingga kering',
      '2. Parut kelapa dengan parutan halus',
      '3. Sisir gula merah hingga halus, buang kotoran jika ada',
      '4. Sobek-sobek daun pandan untuk menambah aroma',
      'Membuat adonan:',
      '1. Campurkan singkong parut dengan kelapa parut',
      '2. Tambahkan gula merah halus, aduk rata',
      '3. Masukkan garam dan daun pandan',
      '4. Remas-remas adonan hingga tercampur rata',
      '5. Diamkan selama 15-20 menit agar gula meresap',
      '6. Jika adonan terlalu lembek, tambahkan tepung terigu sedikit',
      'Membentuk misro:',
      '1. Ambil adonan secukupnya (sekitar 2 sendok makan)',
      '2. Bentuk bulat atau oval sesuai selera',
      '3. Tekan-tekan agar padat dan tidak mudah hancur',
      '4. Pastikan tidak ada celah yang bisa membuat minyak masuk',
      'Menggoreng:',
      '1. Panaskan minyak dengan api sedang-kecil',
      '2. Goreng misro hingga berwarna kuning keemasan',
      '3. Bolak-balik secara perlahan agar tidak hancur',
      '4. Angkat jika sudah matang dan berwarna cantik',
      '5. Tiriskan di atas kertas minyak',
      'Tips penting:',
      '• Singkong harus diperas benar-benar kering agar tidak hancur saat digoreng',
      '• Gunakan api sedang-kecil agar matang merata',
      '• Jangan terlalu sering membolak-balik saat menggoreng',
      '• Pilih singkong yang tidak berair dan tidak pahit',
      '• Gula merah harus halus agar tidak menggumpal',
      'Variasi misro:',
      '• Misro keju: Tambahkan keju parut untuk rasa gurih',
      '• Misro pandan: Tambahkan pasta pandan untuk warna hijau',
      '• Misro kelapa muda: Gunakan kelapa muda parut untuk tekstur lebih lembut',
      'Penyimpanan:',
      '• Misro bisa disimpan dalam wadah kedap udara',
      '• Tahan hingga 2-3 hari di suhu ruang',
      '• Untuk menjaga kerenyahan, hangatkan sebentar di oven sebelum disajikan',
    ],
  },
  // Kue & Camilan Manis
  {
    nama: 'Surabi',
    bahan: [
      '250 gr tepung beras',
      '50 gr tepung terigu',
      '400 ml santan kental',
      '200 ml air',
      '1 sdt garam',
      '1 sdt ragi instan',
      '1 sdm gula pasir',
      '2 lembar daun pandan (sobek-sobek)',
      'Topping gurih:',
      '100 gr ebi (udang kering), rendam air panas lalu cincang',
      '3 siung bawang putih (cincang halus)',
      '2 siung bawang merah (cincang halus)',
      '2 batang daun bawang (iris halus)',
      '1 sdt garam',
      '1/2 sdt merica bubuk',
      '2 sdm minyak goreng',
      'Topping manis:',
      '100 gr gula merah (sisir halus)',
      '100 ml santan kental',
      '1/4 sdt garam',
      '1 lembar daun pandan',
    ],
    cara: [
      'Membuat adonan:',
      '1. Campurkan tepung beras dan tepung terigu',
      '2. Larutkan ragi dengan sedikit air hangat dan gula, diamkan 5 menit',
      '3. Campurkan santan, air, garam, dan daun pandan',
      '4. Tuang campuran santan ke tepung sedikit demi sedikit sambil diaduk',
      '5. Masukkan larutan ragi, aduk rata',
      '6. Saring adonan agar halus',
      '7. Tutup dengan kain bersih, diamkan 1-2 jam hingga berbusa',
      'Membuat topping gurih:',
      '1. Panaskan minyak, tumis bawang putih dan bawang merah',
      '2. Masukkan ebi cincang, tumis hingga harum',
      '3. Tambahkan garam dan merica',
      '4. Masukkan daun bawang, aduk sebentar, angkat',
      'Membuat topping manis:',
      '1. Rebus santan dengan daun pandan',
      '2. Masukkan gula merah dan garam',
      '3. Aduk hingga gula larut dan mengental',
      '4. Saring dan sisihkan',
      'Membuat surabi:',
      '1. Panaskan cetakan surabi atau wajan anti lengket dengan api kecil',
      '2. Olesi sedikit minyak',
      '3. Tuang adonan secukupnya, ratakan',
      '4. Tutup dan masak hingga bagian bawah matang (sekitar 3-4 menit)',
      '5. Taburi dengan topping gurih atau siram dengan topping manis',
      '6. Masak sebentar hingga topping melekat',
      '7. Angkat dan sajikan',
      'Tips:',
      '• Gunakan api kecil agar matang merata dan tidak gosong',
      '• Adonan harus sudah berbusa untuk hasil yang empuk',
      '• Cetakan harus benar-benar panas sebelum menuang adonan',
      '• Jangan buka tutup terlalu sering agar uap tidak keluar',
      '• Surabi matang jika bagian atas sudah tidak basah',
      'Variasi surabi:',
      '• Surabi keju: Taburi dengan keju parut',
      '• Surabi cokelat: Beri topping cokelat meses',
      '• Surabi kelapa: Taburi dengan kelapa parut dan gula merah',
      '• Surabi oncom: Tambahkan oncom goreng sebagai topping',
      'Penyajian: Surabi paling nikmat disajikan hangat langsung dari cetakan. Bisa dimakan sebagai sarapan atau camilan sore dengan teh hangat.',
    ],
  },
  {
    nama: 'Colenak',
    bahan: [
      '500 gr singkong (pilih yang manis dan tidak berair)',
      'Air secukupnya untuk merebus',
      '1 sdt garam',
      'Bumbu olesan:',
      '100 gr kelapa parut',
      '100 gr gula merah (sisir halus)',
      '1/2 sdt garam',
      '1 lembar daun pandan (sobek-sobek)',
      '2 sdm air',
    ],
    cara: [
      'Persiapan singkong:',
      '1. Kupas singkong, buang bagian tengah yang keras',
      '2. Potong-potong sesuai selera (biasanya memanjang)',
      '3. Cuci bersih hingga tidak berlendir',
      'Merebus singkong:',
      '1. Rebus air dengan garam hingga mendidih',
      '2. Masukkan singkong, rebus hingga empuk (sekitar 20-30 menit)',
      '3. Tusuk dengan garpu untuk mengecek kematangan',
      '4. Angkat dan tiriskan',
      'Membuat bumbu olesan:',
      '1. Campurkan kelapa parut dengan gula merah',
      '2. Tambahkan garam dan daun pandan',
      '3. Beri air sedikit, aduk rata',
      '4. Remas-remas hingga gula meresap ke kelapa',
      '5. Diamkan 15 menit agar rasanya meresap',
      'Cara penyajian:',
      '1. Tusuk singkong rebus dengan tusuk sate',
      '2. Bakar di atas bara api atau panggangan',
      '3. Bolak-balik hingga permukaan sedikit kecokelatan',
      '4. Olesi dengan bumbu kelapa gula merah',
      '5. Bakar sebentar lagi agar bumbu melekat',
      '6. Sajikan hangat',
      'Tips:',
      '• Pilih singkong yang tidak berair dan tidak pahit',
      '• Jangan terlalu lama membakar agar tidak gosong',
      '• Bisa menggunakan teflon jika tidak ada panggangan',
      '• Bumbu olesan bisa dibuat lebih banyak sesuai selera',
      'Variasi colenak:',
      '• Colenak keju: Tambahkan keju parut di atas bumbu',
      '• Colenak susu: Tambahkan susu kental manis',
      '• Colenak cokelat: Beri topping cokelat meses',
      '• Colenak durian: Tambahkan daging durian sebagai topping',
      'Bumbu olesan alternatif:',
      '• Bumbu kacang: Campuran kacang tanah halus, gula merah, dan santan',
      '• Bumbu wijen: Wijen sangrai halus dengan gula merah',
      '• Bumbu kelapa pandan: Tambahkan pasta pandan untuk warna hijau',
      'Penyimpanan:',
      '• Singkong rebus bisa disimpan di kulkas 1-2 hari',
      '• Bumbu olesan tahan 2-3 hari di suhu ruang',
      '• Panaskan kembali sebelum dikonsumsi',
    ],
  },
  {
    nama: 'Peuyeum',
    bahan: [
      '2 kg singkong segar (pilih yang berkualitas baik)',
      '2-3 butir ragi tape (bisa beli di pasar tradisional)',
      'Daun pisang secukupnya',
      'Air bersih untuk mencuci',
      'Peralatan:',
      'Panci besar untuk merebus',
      'Saringan atau dandang',
      'Wadah plastik atau anyaman bambu',
      'Kain bersih atau plastik untuk menutup',
    ],
    cara: [
      'Persiapan singkong:',
      '1. Pilih singkong yang segar, tidak busuk, dan tidak berair',
      '2. Kupas kulit singkong hingga bersih',
      '3. Buang bagian tengah yang keras jika ada',
      '4. Potong singkong menjadi beberapa bagian (sekitar 10-15 cm)',
      '5. Cuci hingga bersih, hilangkan getah yang menempel',
      'Merebus singkong:',
      '1. Rebus air dalam panci besar hingga mendidih',
      '2. Masukkan singkong, rebus hingga empuk (sekitar 20-30 menit)',
      '3. Jangan terlalu empuk, singkong harus masih padat',
      '4. Angkat dan tiriskan hingga benar-benar dingin',
      '5. Pastikan tidak ada air yang tersisa',
      'Persiapan ragi:',
      '1. Haluskan ragi tape dengan cara ditumbuk atau diblender',
      '2. Ayak agar mendapat bubuk ragi yang halus',
      '3. Ragi harus benar-benar kering dan halus',
      'Proses fermentasi:',
      '1. Taburi singkong yang sudah dingin dengan bubuk ragi',
      '2. Ratakan ragi ke seluruh permukaan singkong',
      '3. Balut singkong dengan daun pisang atau kain bersih',
      '4. Masukkan ke dalam wadah tertutup',
      '5. Simpan di tempat yang hangat dan gelap',
      '6. Biarkan selama 2-3 hari untuk fermentasi',
      'Perawatan selama fermentasi:',
      '1. Jangan membuka tutup terlalu sering',
      '2. Pastikan suhu ruangan stabil (sekitar 25-30°C)',
      '3. Hindari tempat yang terlalu dingin atau panas',
      '4. Cek setelah 2 hari, jika sudah berbau harum dan berair, berarti berhasil',
      'Tanda peuyeum matang:',
      '• Berbau harum dan sedikit asam',
      '• Tekstur menjadi lembut dan berair',
      '• Rasa manis dan sedikit asam',
      '• Berwarna sedikit kekuningan',
      'Tips berhasil:',
      '• Gunakan singkong yang fresh dan berkualitas baik',
      '• Ragi harus masih aktif (tidak kadaluarsa)',
      '• Kebersihan alat sangat penting',
      '• Suhu ruangan harus stabil',
      '• Jangan terkena sinar matahari langsung',
      '• Hindari kontaminasi dengan bakteri jahat',
      'Cara penyimpanan:',
      '• Peuyeum matang bisa disimpan di kulkas 3-5 hari',
      '• Simpan dalam wadah tertutup',
      '• Semakin lama disimpan, rasa akan semakin asam',
      'Variasi penyajian:',
      '• Peuyeum goreng: Celupkan dalam tepung dan goreng',
      '• Es peuyeum: Campur dengan es dan susu kental manis',
      '• Peuyeum bakar: Bakar sebentar di atas bara api',
      '• Kolak peuyeum: Masak dengan santan dan gula merah',
    ],
  },
];


const Gastronomy = () => {
  const [modalResep, setModalResep] = useState<string | null>(null);

  // Helper: cari resep detail berdasarkan nama
  const getResepDetail = (nama: string): typeof resep[0] | undefined => resep.find((r) => r.nama === nama);

  // Helper: render list makanan dengan modal
  const renderListWithModal = (arr: string[]): JSX.Element => (
    <ul className="flex flex-wrap gap-2 justify-center">
      {arr.map((m: string, i: number) => (
        <li
          key={i}
          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium shadow cursor-pointer hover:bg-green-200"
          onClick={() => setModalResep(m)}
        >
          {m}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <Hero
        title="jelajah jabar"
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
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden bg-cover bg-center gastronomy-bg-1">
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Makanan Pokok & Utama</h3>
                {renderListWithModal(makananPokok)}
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden bg-cover bg-center gastronomy-bg-2">
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Olahan Sayur & Sambal</h3>
                {renderListWithModal(olahanSayur)}
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden bg-cover bg-center gastronomy-bg-3">
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Jajanan & Lauk Pendamping</h3>
                {renderListWithModal(jajananLauk)}
              </div>
            </div>
            <div className="rounded-xl shadow-lg p-6 flex flex-col items-center relative overflow-hidden bg-cover bg-center gastronomy-bg-4">
              <div className="absolute inset-0 bg-white/60"></div>
              <div className="relative w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-green-700 mb-2">Kue & Camilan Manis</h3>
                {renderListWithModal(kueCamilan)}
              </div>
            </div>
          </div>
          <div className="mb-8 rounded-xl shadow-lg p-6 relative overflow-hidden bg-cover bg-center gastronomy-bg-5">
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
          {/* Modal Resep Pop-up */}
          {modalResep && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
              <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-0 relative animate-fadeIn scale-100 transition-transform duration-300 border border-green-300 gastronomy-modal-shadow">
                {/* Header Bar */}
                <div className="flex items-center justify-between px-8 py-5 rounded-t-3xl bg-gradient-to-r from-green-100 via-white to-green-50 border-b border-green-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center shadow-lg">
                      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-700">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-extrabold text-green-800 text-center drop-shadow">{getResepDetail(modalResep)?.nama}</h3>
                  </div>
                  <button
                    className="text-green-700 hover:text-green-900 text-2xl font-bold bg-green-100 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-colors duration-200 focus:outline-none"
                    onClick={() => setModalResep(null)}
                    aria-label="Tutup"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                {/* Divider */}
                <div className="w-full h-2 bg-gradient-to-r from-green-200 via-green-50 to-green-100 mb-2"></div>
                {/* Content */}
                <div className="overflow-y-auto max-h-[60vh] px-8 pb-8 pt-2">
                  <h4 className="font-semibold mb-2 text-green-700 text-lg">Bahan-bahan:</h4>
                  <ul className="list-disc ml-6 mb-4 text-gray-800 text-base">
                    {getResepDetail(modalResep)?.bahan.map((b, i) => (
                      <li key={i} className="mb-1">{b}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2 text-green-700 text-lg">Cara Membuat:</h4>
                  <div className="ml-2 text-gray-800 text-base">
                    {(() => {
                      const cara: string[] = getResepDetail(modalResep)?.cara || [];
                      type Section = { title: string | null; steps: string[] };
                      const sections: Section[] = [];
                      let currentSection: string | null = null;
                      let currentSteps: string[] = [];
                      cara.forEach((step) => {
                        // Section: ends with ':' and not a numbered step
                        if (/^[^\d]+:$/i.test(step.trim())) {
                          // Push previous section if exists
                          if (currentSection) {
                            sections.push({ title: currentSection, steps: currentSteps });
                          }
                          currentSection = step.replace(':', '').trim();
                          currentSteps = [];
                        } else {
                          // Step: remove leading number and dots, and fix double dots
                          let stepText = step.replace(/^\d+\.\s*/, "");
                          stepText = stepText.replace(/^\.+\s*/, "");
                          stepText = stepText.replace(/^\s*\.+/, "");
                          stepText = stepText.replace(/^•\s*/, ""); // Remove leading bullet if any
                          stepText = stepText.replace(/\.\./g, "."); // Replace double dots with single dot
                          currentSteps.push(stepText);
                        }
                      });
                      // Push last section
                      if (currentSection) {
                        sections.push({ title: currentSection, steps: currentSteps });
                      } else if (currentSteps.length) {
                        // If no section, just show all steps
                        sections.push({ title: null, steps: currentSteps });
                      }
                      return sections.map((sec, i) => (
                        <div key={i} className="mb-4">
                          {sec.title && (
                            <div className="font-bold text-green-700 mb-2 text-base">{sec.title}</div>
                          )}
                          <ul className="list-disc ml-6">
                            {sec.steps.map((s, j) => (
                              <li key={j} className="mb-1">{s}</li>
                            ))}
                          </ul>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gastronomy;