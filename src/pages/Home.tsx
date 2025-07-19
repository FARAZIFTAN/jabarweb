import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Sustainable Destination",
      description: "Jelajahi keindahan alam Jawa Barat secara bertanggung jawab. Dari hamparan kebun teh Pangalengan hingga pesona vulkanik Kawah Putih, temukan destinasi yang mengutamakan pelestarian lingkungan dan pengalaman tak terlupakan.",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Lanskap indah Jawa Barat",
      imageOnLeft: true,
      ctaText: "Jelajahi Destinasi",
      ctaAction: () => navigate('/destinations')
    },
    {
      title: "Sustained Experience",
      description: "Rasakan pengalaman budaya otentik yang mendukung komunitas lokal. Ikuti workshop batik tradisional, pelajari teknik pertanian organik, dan berinteraksi dengan pengrajin yang menjaga tradisi sekaligus menerapkan praktik berkelanjutan.",
      image: "https://images.pexels.com/photos/6128025/pexels-photo-6128025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Workshop batik tradisional",
      imageOnLeft: false,
      ctaText: "Temukan Pengalaman",
      ctaAction: () => navigate('/experience')
    },
    {
      title: "Event Berkelanjutan",
      description: "Ikuti festival dan event ramah lingkungan yang merayakan budaya Jawa Barat sekaligus meningkatkan kesadaran lingkungan. Mulai dari festival musik hijau hingga pasar makanan berkelanjutan, semua membawa komunitas menuju masa depan lebih baik.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Festival budaya di Jawa Barat",
      imageOnLeft: true,
      ctaText: "Lihat Event",
      ctaAction: () => navigate('/events')
    },
    {
      title: "Gastronomi Berkelanjutan",
      description: "Nikmati cita rasa otentik Jawa Barat melalui kuliner farm-to-table yang mendukung petani lokal dan metode masak tradisional. Rasakan warisan kuliner sambil berkontribusi pada sistem pangan berkelanjutan dan ekonomi lokal.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageAlt: "Kuliner tradisional Jawa Barat",
      imageOnLeft: false,
      ctaText: "Cicipi Kuliner Lokal",
      ctaAction: () => navigate('/gastronomy')
    },
    {
      title: "Warisan Budaya & Sejarah",
      description: "Telusuri kekayaan budaya dan sejarah Jawa Barat melalui situs kerajaan kuno dan komunitas beragam. Kunjungi candi, museum, dan tempat bersejarah yang menjaga memori kolektif sekaligus memperkuat pemahaman budaya.",
      image: "https://jogja.disway.id/upload/dbc2706fe0749df8a91f3cf5f9820a50.jpg",
      imageAlt: "Candi kuno di Jawa Barat",
      imageOnLeft: true,
      ctaText: "Jelajahi Warisan",
      ctaAction: () => navigate('/heritage')
    }
  ];

  return (
    <div>
      <Hero
        title="Sustainable Tourism in West Java"
        subtitle="Experience the beauty of nature while preserving it for future generations"
        backgroundImage="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        ctaText="Start Your Journey"
        ctaAction={() => navigate('/destinations')}
      />
      
      <div className="bg-stone-50">
        {/* Section Knowledge */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
          <div className="relative rounded-2xl shadow-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-hidden min-h-[340px]">
            <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Background Knowledge" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-stone-100/60 backdrop-blur z-10" />
            <div className="relative z-20 p-6 md:p-10">
              <h2 className="text-3xl font-extrabold text-green-900 mb-2 flex items-center gap-2"><span className="inline-block text-emerald-600"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span>Knowledge – Wawasan untuk Masa Depan Lestari</h2>
              <p className="text-gray-800 mb-4 text-base md:text-lg">Website Jawa Barat Lestari menyediakan sumber pengetahuan terpercaya mengenai isu-isu lingkungan, budaya, dan pembangunan berkelanjutan, dengan pendekatan lokal dan global.</p>
              <ul className="mb-4 grid grid-cols-1 gap-2">
                <li className="flex items-center gap-2 text-green-700"><span className="text-xl">🌳</span> Edukasi konservasi hutan, sungai, dan eco-living budaya Sunda</li>
                <li className="flex items-center gap-2 text-green-700"><span className="text-xl">♻️</span> Materi pengelolaan sampah berbasis komunitas</li>
                <li className="flex items-center gap-2 text-green-700"><span className="text-xl">🌏</span> Wawasan global dan lokal untuk aksi nyata</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="flex flex-col items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow">
                  <span className="text-green-600 text-2xl mb-1">📄</span>
                  <span className="font-semibold text-green-800 text-sm">Artikel</span>
                </div>
                <div className="flex flex-col items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow">
                  <span className="text-green-600 text-2xl mb-1">📊</span>
                  <span className="font-semibold text-green-800 text-sm">Infografis</span>
                </div>
                <div className="flex flex-col items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow">
                  <span className="text-green-600 text-2xl mb-1">🎬</span>
                  <span className="font-semibold text-green-800 text-sm">Video Edukasi</span>
                </div>
                <div className="flex flex-col items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow">
                  <span className="text-green-600 text-2xl mb-1">🧩</span>
                  <span className="font-semibold text-green-800 text-sm">Kuis Interaktif</span>
                </div>
              </div>
              <div className="mt-2">
                {/* Button 'Belajar Lestari' dihapus sesuai permintaan */}
              </div>
            </div>
            <div className="hidden md:flex justify-center relative z-20">
              <img src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Knowledge" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
            </div>
          </div>
        </div>
        {/* Section Campaign */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
          <div className="relative rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6 items-center overflow-hidden min-h-[340px]">
            <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Background Campaign" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-stone-100/60 backdrop-blur z-10" />
            <div className="relative z-20 p-6 md:p-10">
              <h2 className="text-3xl font-extrabold text-green-900 mb-2 flex items-center gap-2"><span className="inline-block text-emerald-600"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></span>Campaign – Gerakan Nyata untuk Lingkungan dan Budaya</h2>
              <p className="text-gray-800 mb-4 text-base md:text-lg">Jawa Barat Lestari mengajak masyarakat untuk terlibat dalam kampanye pelestarian lingkungan dan budaya lokal yang berdampak langsung ke komunitas.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow gap-3">
                  <span className="text-green-600 text-3xl">🌱</span>
                  <div>
                    <span className="font-bold text-green-800">#TanamPohonLestari</span>
                    <p className="text-green-700 text-sm">Gerakan menanam pohon serentak di area rawan longsor dan gundul.</p>
                  </div>
                </div>
                <div className="flex items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow gap-3">
                  <span className="text-green-600 text-3xl">🗑</span>
                  <div>
                    <span className="font-bold text-green-800">#BersihSampahSunda</span>
                    <p className="text-green-700 text-sm">Kolaborasi warga untuk membersihkan sungai dan kampung secara berkala.</p>
                  </div>
                </div>
                <div className="flex items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow gap-3">
                  <span className="text-green-600 text-3xl">🧓</span>
                  <div>
                    <span className="font-bold text-green-800">#CeritaLeluhur</span>
                    <p className="text-green-700 text-sm">Kampanye digital untuk mendokumentasikan kisah dan tradisi dari para tetua adat.</p>
                  </div>
                </div>
                <div className="flex items-center bg-green-50/60 backdrop-blur rounded-xl p-3 shadow gap-3">
                  <span className="text-green-600 text-3xl">🧠</span>
                  <div>
                    <span className="font-bold text-green-800">#SadarLestari</span>
                    <p className="text-green-700 text-sm">Edukasi online dan offline tentang gaya hidup berkelanjutan.</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                {/* Button 'Gabung Gerakan' dihapus sesuai permintaan */}
              </div>
              <p className="text-gray-600 mt-4 text-sm">Kampanye melibatkan sekolah, komunitas, UMKM, dan masyarakat umum. Setiap orang dapat mendaftar sebagai relawan, membuat inisiatif lokal, atau berdonasi untuk kegiatan pelestarian.</p>
            </div>
            <div className="hidden md:flex justify-center relative z-20">
              <img src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Campaign" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
            </div>
          </div>
        </div>
        {/* Section Cards */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6 grid gap-6">
          {sections.map((section, index) => (
            <div key={index} className="relative rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 overflow-hidden min-h-[340px]">
              <img src={section.image} alt={section.imageAlt} className="absolute inset-0 w-full h-full object-cover z-0" />
              <div className="absolute inset-0 bg-stone-100/60 backdrop-blur z-10" />
              <div className={`w-full md:w-1/2 ${section.imageOnLeft ? 'order-1' : 'order-2'} flex justify-center relative z-20`}>
                <img src={section.image} alt={section.imageAlt} className="rounded-xl shadow-lg w-full max-w-md object-cover" />
              </div>
              <div className={`w-full md:w-1/2 ${section.imageOnLeft ? 'order-2' : 'order-1'} flex flex-col justify-center gap-3 relative z-20 p-6 md:p-10`}>
                <h3 className="text-2xl font-bold text-green-900 mb-1">{section.title}</h3>
                <p className="text-gray-800 mb-2 text-base md:text-lg">{section.description}</p>
                <button onClick={section.ctaAction} className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-5 py-2 rounded-lg font-bold shadow text-base w-fit">{section.ctaText}</button>
              </div>
            </div>
          ))}
        </div>
      {/* Tutup div utama bg-stone-50 */}
      </div>
    </div>
  );
};

export default Home;