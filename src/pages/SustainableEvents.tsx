import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
	   {
			   title: 'Bandung Eco Festival',
			   location: 'Taman Hutan Raya Juanda, Bandung',
			   price: 'Rp 25.000 - Rp 75.000',
			   description: 'Festival tahunan edukasi lingkungan, workshop, dan produk ramah lingkungan.',
			   image: 'https://cozzy.id/uploads/0000/630/2024/07/06/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-asia-africa-festival-bandung-2024-merayakan-keragaman-budaya-di-kota-kembang-sumber-gambar-phrijawabarat.jpg',
			   maps: '',
	   },
	   {
			   title: 'Green Living Expo Bandung',
			   location: 'Trans Studio Convention Center, Bandung',
			   price: 'Rp 15.000 - Rp 50.000',
			   description: 'Pameran inovasi teknologi hijau, seminar, dan produk ramah lingkungan.',
			   image: 'https://www.handalselaras.com/wp-content/uploads/2020/01/images.jpg',
			   maps: '',
	   },
	   {
			   title: 'Dusun Bambu Trail Run',
			   location: 'Dusun Bambu, Lembang, Kabupaten Bandung Barat',
			   price: 'Rp 150.000 - Rp 300.000',
			   description: 'Lari eco-friendly, race pack ramah lingkungan, penanaman pohon & pemandangan alam.',
			   image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/06/02/dusun_bambu-939815725.jpg',
			   maps: '',
	   },
	{
		title: 'Ciwidey Organic Festival',
		location: 'Kawasan Wisata Ciwidey, Kabupaten Bandung',
		price: 'Rp 20.000 - Rp 65.000',
		description: 'Festival yang merayakan pertanian organik dan produk lokal berkelanjutan di kawasan Ciwidey. Event ini menampilkan berbagai produk organik dari petani lokal, termasuk sayuran, buah-buahan, dan produk olahan organik. Pengunjung dapat belajar tentang teknik pertanian organik melalui workshop dan demo langsung dari para petani berpengalaman.\nFestival ini juga menghadirkan kuliner organik dan healthy food yang diolah dari bahan-bahan segar lokal. Terdapat area edukasi anak-anak tentang pentingnya menjaga lingkungan dan mengenal berbagai jenis tanaman organik. Seluruh kemasan dan peralatan yang digunakan dalam festival ini ramah lingkungan dan dapat didaur ulang.',
		image: 'https://zona-adventure.com/image/Ciwidey/Ciwidey.jpg',
		maps: '',
	},
	{
		title: 'Tangkuban Perahu Eco Adventure',
		location: 'Kawasan Wisata Tangkuban Perahu, Lembang',
		price: 'Rp 100.000 - Rp 250.000',
		description: 'Adventure tour berkelanjutan yang menggabungkan wisata alam dengan edukasi lingkungan di kawasan Tangkuban Perahu. Peserta dapat mengikuti hiking dengan pemandu yang menjelaskan tentang ekosistem gunung berapi dan pentingnya konservasi alam. Program ini menggunakan prinsip Leave No Trace dan mendorong peserta untuk menjaga kebersihan lingkungan.\nEvent ini juga menyediakan program edukasi tentang geologi vulkanik dan dampaknya terhadap lingkungan sekitar. Peserta akan diajak untuk memahami pentingnya menjaga kelestarian alam dan ekosistem gunung berapi. Semua fasilitas dan perlengkapan yang digunakan dalam event ini ramah lingkungan dan dapat didaur ulang.',
		image: 'https://www.wisatala.com/wp-content/uploads/2023/07/tangkuban-perahu-02.jpg',
		maps: '',
	},
	{
		title: 'Subang Green Technology Exhibition',
		location: 'Subang Convention Center, Subang',
		price: 'Rp 10.000 - Rp 40.000',
		description: 'Pameran teknologi hijau yang menampilkan inovasi berkelanjutan dalam bidang energi terbarukan, pertanian modern, dan industri ramah lingkungan. Event ini menghadirkan berbagai perusahaan teknologi hijau, startup, dan institusi penelitian yang memamerkan solusi berkelanjutan. Pengunjung dapat melihat demonstrasi teknologi seperti biogas, solar panel, dan sistem pengolahan limbah organik.\nPameran ini juga menjadi platform edukasi bagi masyarakat tentang pentingnya adopsi teknologi hijau dalam kehidupan sehari-hari. Tersedia workshop dan seminar yang membahas tentang implementasi teknologi berkelanjutan di level komunitas dan rumah tangga. Event ini mendorong kolaborasi antara pemerintah, swasta, dan masyarakat dalam pengembangan teknologi hijau.',
		image: 'https://img.inews.co.id/media/600/files/networks/2022/07/28/2f387_subang.jpg',
		maps: '',
	},
	{
		title: 'Bogor Sustainable Fashion Week',
		location: 'Kebun Raya Bogor dan sekitarnya',
		price: 'Rp 50.000 - Rp 150.000',
		description: 'Fashion week yang memfokuskan pada industri fashion berkelanjutan dan ethical fashion. Event ini menampilkan desainer lokal yang menggunakan bahan ramah lingkungan dan proses produksi yang bertanggung jawab. Runway show dilakukan di area terbuka dengan dekorasi dari bahan daur ulang dan pencahayaan hemat energi.\nAcara ini juga menghadirkan workshop tentang sustainable fashion, upcycling, dan cara merawat pakaian agar lebih tahan lama. Pengunjung dapat belajar tentang dampak industri fashion terhadap lingkungan dan bagaimana memilih fashion yang lebih berkelanjutan. Seluruh merchandise dan goodie bag menggunakan bahan ramah lingkungan.',
		image: 'https://t-2.tstatic.net/banyumas/foto/bank/images/runtah-fashion-week-di-lapangan-damarjati-karangtalun-cilacap-2.jpg',
		maps: '',
	},
	{
		title: 'Cirebon Renewable Energy Summit',
		location: 'Cirebon Convention Center',
		price: 'Rp 75.000 - Rp 200.000',
		description: 'Summit yang membahas pengembangan energi terbarukan di Indonesia, khususnya di wilayah Jawa Barat. Event ini menghadirkan para ahli energi, policymaker, dan pelaku industri untuk mendiskusikan strategi pengembangan energi berkelanjutan. Tersedia exhibition area yang menampilkan berbagai teknologi energi terbarukan seperti solar, wind, dan biomass.\nSummit ini juga menjadi platform networking bagi para stakeholder di bidang energi terbarukan untuk berkolaborasi dalam proyek-proyek berkelanjutan. Peserta dapat mengikuti workshop teknis tentang instalasi dan maintenance sistem energi terbarukan. Event ini mendorong investasi dan pengembangan infrastruktur energi hijau di Jawa Barat.',
		image: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/I35GIA6WDRLJ3OALKD4PZMNCLA.jpg',
		maps: '',
	},
	{
		title: 'Karawang Eco-Industrial Park Forum',
		location: 'Kawasan Industri Karawang',
		price: 'Rp 100.000 - Rp 300.000',
		description: 'Forum yang membahas pengembangan kawasan industri berkelanjutan dan implementasi circular economy di sektor industri. Event ini dihadiri oleh para industrialis, regulator, dan expert yang mendiskusikan best practices dalam industri hijau. Tersedia plant visit ke beberapa pabrik yang telah mengimplementasikan sistem produksi berkelanjutan.\nForum ini juga membahas tentang waste management, energy efficiency, dan green supply chain dalam konteks industri. Peserta dapat belajar tentang sertifikasi lingkungan dan standar internasional untuk industri berkelanjutan. Event ini mendorong transformasi industri di Jawa Barat menuju praktik yang lebih ramah lingkungan.',
		image: 'https://emitennews.com/images/news/image_1670900125.jpg?25119ab',
		maps: '',
	},
	{
		title: 'Tasikmalaya Craft & Sustainability Festival',
		location: 'Alun-alun Tasikmalaya',
		price: 'Rp 15.000 - Rp 45.000',
		description: 'Festival yang memadukan kerajinan tradisional dengan prinsip keberlanjutan. Event ini menampilkan berbagai kerajinan tangan dari bahan-bahan ramah lingkungan seperti bambu, pandan, dan limbah tekstil yang didaur ulang. Pengrajin lokal memamerkan teknik pembuatan kerajinan yang telah turun temurun dengan sentuhan modern yang berkelanjutan.\nFestival ini juga menyediakan workshop bagi pengunjung untuk belajar membuat kerajinan dari bahan daur ulang. Terdapat area edukasi tentang pentingnya melestarikan kerajinan tradisional sambil menjaga kelestarian lingkungan. Seluruh packaging dan material yang digunakan dalam festival ini biodegradable dan ramah lingkungan.',
		image: 'https://img.antarafoto.com/cache/1200x794/2016/10/07/tasikmalaya-creative-festival-dned-dom.webp',
		maps: '',
	},
	{
		title: 'Bekasi Urban Farming Expo',
		location: 'Summarecon Mall Bekasi',
		price: 'Rp 20.000 - Rp 60.000',
		description: 'Pameran yang fokus pada urban farming dan smart agriculture di area perkotaan. Event ini menampilkan berbagai teknik bercocok tanam di lahan terbatas seperti vertical farming, hydroponics, dan aquaponics. Pengunjung dapat belajar tentang cara memulai berkebun di rumah dan apartemen dengan sistem yang efisien dan berkelanjutan.\nExpo ini juga menghadirkan berbagai peralatan dan teknologi untuk urban farming, termasuk sistem irigasi otomatis dan nutrisi organik. Terdapat workshop praktis tentang pembuatan kompos dari sampah organik rumah tangga dan penggunaan teknologi smart farming. Event ini mendorong masyarakat urban untuk berpartisipasi dalam produksi pangan yang berkelanjutan.',
		image: 'https://mirror.mui.or.id/wp-content/uploads/2022/01/33313-pelatihan-aquaponik-dan-urban-farming.jpeg',
		maps: '',
	},
	{
		title: 'Sukabumi Ecotourism Festival',
		location: 'Taman Nasional Gunung Gede Pangrango, Sukabumi',
		price: 'Rp 35.000 - Rp 120.000',
		description: 'Festival wisata alam berkelanjutan yang menampilkan keindahan alam Sukabumi dengan konsep responsible tourism. Event ini menawarkan berbagai aktivitas outdoor seperti hiking, bird watching, dan nature photography yang dilakukan dengan prinsip minimal impact. Semua aktivitas dipandu oleh local guide yang berpengalaman dalam ekowisata.\nFestival ini juga memperkenalkan program community-based tourism yang melibatkan masyarakat lokal sebagai pemandu dan penyedia layanan wisata. Pengunjung dapat belajar tentang konservasi alam dan pentingnya menjaga ekosistem hutan tropis. Seluruh fasilitas dan aktivitas dalam festival ini dirancang untuk meminimalkan dampak terhadap lingkungan.',
		image: 'https://media.sukabumiupdate.com/media/2024/08/11/1723358376_66b85ca8aa988_AabFyBACBBGUL0Wbufbs-medium.webp',
		maps: '',
	},
	{
		title: 'Bandung Barat Organic Market Festival',
		location: 'Kota Baru Parahyangan, Bandung Barat',
		price: 'Rp 10.000 - Rp 35.000',
		description: 'Festival pasar organik yang menampilkan produk-produk segar dan olahan organik dari petani lokal Bandung Barat. Event ini menyediakan platform bagi petani organik untuk menjual produk mereka langsung kepada konsumen. Pengunjung dapat membeli sayuran, buah-buahan, dan produk olahan organik dengan harga yang terjangkau.\nFestival ini juga menghadirkan cooking demo menggunakan bahan-bahan organik dan workshop tentang manfaat makanan organik bagi kesehatan. Terdapat area edukasi anak-anak tentang proses pertanian organik dan pentingnya mengkonsumsi makanan sehat. Seluruh kemasan dan kantong belanja yang digunakan dalam festival ini ramah lingkungan.',
		image: 'https://static.promediateknologi.id/crop/0x0:0x0/750x0/webp/photo/p1/79/2024/08/23/ayobdg_festival-kuliner-bandung_ncos-11-3770898689.jpg',
		maps: '',
	},
	{
		title: 'Cimahi Green Building Exhibition',
		location: 'Cimahi Convention Center',
		price: 'Rp 25.000 - Rp 80.000',
		description: 'Pameran yang menampilkan inovasi dalam green building dan sustainable architecture. Event ini menghadirkan arsitek, kontraktor, dan supplier material bangunan ramah lingkungan. Pengunjung dapat melihat berbagai teknologi dan material bangunan yang hemat energi dan ramah lingkungan seperti solar panel, green roof, dan sistem rainwater harvesting.\nPameran ini juga menyediakan seminar dan workshop tentang desain bangunan berkelanjutan dan sertifikasi green building. Terdapat area demo yang menunjukkan implementasi teknologi hijau dalam bangunan. Event ini mendorong adopsi konsep green building dalam pembangunan di Jawa Barat.',
		image: 'https://eticon.co.id/wp-content/uploads/2022/12/Penggunaan-konsep-green-building.jpg',
		maps: '',
	},
	{
		title: 'Purwakarta Zero Waste Festival',
		location: 'Situ Buleud, Purwakarta',
		price: 'Rp 15.000 - Rp 50.000',
		description: 'Festival yang mengusung konsep zero waste lifestyle dan circular economy. Event ini menampilkan berbagai workshop tentang reduce, reuse, dan recycle dalam kehidupan sehari-hari. Peserta dapat belajar membuat produk dari bahan daur ulang dan teknik composting untuk mengurangi sampah organik.\nFestival ini juga menghadirkan booth-booth yang menjual produk refill dan reusable untuk mendukung gaya hidup zero waste. Terdapat area edukasi tentang dampak sampah terhadap lingkungan dan cara mengurangi jejak karbon. Seluruh event diselenggarakan dengan konsep zero waste dimana semua sampah yang dihasilkan akan didaur ulang atau dikompos.',
		image: 'https://api.jatimnet.com/jinet/assets/media/filer_public_thumbnails/filer_public/93/31/933156cf-c0c4-485c-be17-87036b255bb3/busana_koran.jpg__800x571_q85_subsampling-2.jpg',
		maps: '',
	}
];

const SustainableEvents = () => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [atStart, setAtStart] = useState(true);
	const [atEnd, setAtEnd] = useState(false);

	const checkScrollPosition = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setAtStart(scrollLeft <= 0);
			setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
		}
	};

	useEffect(() => {
		const ref = scrollRef.current;
		if (!ref) return;
		checkScrollPosition();
		ref.addEventListener('scroll', checkScrollPosition);
		window.addEventListener('resize', checkScrollPosition);
		return () => {
			ref.removeEventListener('scroll', checkScrollPosition);
			window.removeEventListener('resize', checkScrollPosition);
		};
	}, []);

	const scrollLeft = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
			setTimeout(checkScrollPosition, 350);
		}
	};
	const scrollRight = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
			setTimeout(checkScrollPosition, 350);
		}
	};

	return (
		<div>
			<Hero
				title="Sustainable Events"
				subtitle="15 Sustainable Event di Jawa Barat"
				backgroundImage="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
			/>
			<div className="relative py-16 bg-[url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
							15 Sustainable Event Jawa Barat
						</h2>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow">
							Scroll secara horizontal untuk melihat semua event berkelanjutan di
							Jawa Barat.
						</p>
					</div>
					<div className="relative overflow-hidden">
						<div className="hidden md:block">
							{!atStart && (
								<button
									className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-green-100 transition"
									onClick={scrollLeft}
									aria-label="Scroll kiri"
								>
									<ChevronLeft className="h-6 w-6 text-green-700" />
								</button>
							)}
							{!atEnd && (
								<button
									className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow hover:bg-green-100 transition"
									onClick={scrollRight}
									aria-label="Scroll kanan"
								>
									<ChevronRight className="h-6 w-6 text-green-700" />
								</button>
							)}
						</div>
						<div
							ref={scrollRef}
							className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-x-hidden scroll-smooth"
						>
							<div className="flex space-x-6 min-w-[900px]">
								{events.map((event, idx) => (
									<div
										key={idx}
										className="bg-white rounded-lg shadow-lg min-w-[320px] max-w-xs flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
									>
										{event.maps ? (
											<a
												href={event.maps}
												target="_blank"
												rel="noopener noreferrer"
											>
												<img
													src={event.image}
													alt={event.title}
													className="rounded-t-lg w-full h-40 object-cover cursor-pointer hover:brightness-90 transition"
												/>
											</a>
										) : (
											<img
												src={event.image}
												alt={event.title}
												className="rounded-t-lg w-full h-40 object-cover"
											/>
										)}
										<div className="p-6 flex flex-col h-full justify-between">
											<div>
<div className="flex items-center text-gray-500 text-sm mb-2">
	<MapPin className="h-4 w-4 mr-1" />
	{event.location}
</div>
<h3 className="text-xl font-bold text-gray-800 mb-2">
	{event.title}
</h3>
<div className="flex items-center text-green-700 font-semibold text-base mb-2">
	<DollarSign className="h-4 w-4 mr-1" />
	<span className="tracking-wide whitespace-nowrap overflow-visible">{event.price}</span>
</div>
<p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
	{event.description}
</p>
											</div>

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

export default SustainableEvents;