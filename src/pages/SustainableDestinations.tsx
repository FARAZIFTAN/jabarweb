import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, Star, DollarSign, ChevronLeft, ChevronRight, Mountain, Globe, Droplets, Landmark, Droplet, Leaf, PawPrint } from 'lucide-react';

const destinations = [
  {
	name: 'Kepulauan Biawak',
	location: 'Indramayu, Jawa Barat',
	category: 'Pulau',
	description:
	  'Pulau Biawak adalah destinasi tersembunyi yang menawarkan keindahan alam laut yang masih alami, habitat komodo kecil (biawak), burung langka, pantai berpasir putih, dan mercusuar peninggalan Belanda.',
	price: 'Rp 5.000 - Rp 15.000 (kapal Rp 200.000 - Rp 500.000)',
	image: 'https://awsimages.detik.net.id/community/media/visual/2023/02/02/wisata-pulau-biawak-indramayu-harga-tiket-dan-lokasinya-1_169.jpeg?w=620',
	maps: 'https://maps.app.goo.gl/VHVTKz42C3Jspd7HA',
  },
  {
	name: 'Sanghyang Heuleut',
	location: 'Rajamandala, Bandung Barat',
	category: 'Danau',
	description:
	  'Laguna alami dikelilingi bebatuan purba, air jernih kehijauan, kolam eksotis, dan formasi batu karst yang memukau. Cocok untuk healing dan refreshing.',
	price: 'Rp 10.000 - Rp 15.000',
	image: 'https://wartaparahyangan.com/wp-content/uploads/2022/07/IMG_20220717_091257.jpg',
	maps: 'https://maps.app.goo.gl/5pYETysE49dFYXLw6',
  },
  {
	name: 'Tebing Citatah',
	location: 'Bojong Loa, Cipatat, Bandung Barat',
	category: 'Tebing',
	description:
	  'Tebing kapur spektakuler dengan aktivitas flying fox, rock climbing, dan fotografi landscape. Spot pre-wedding yang instagramable.',
	price: 'Rp 20.000 - Rp 30.000',
	image: 'https://ksmtour.com/media/images/articles14/tebing-citatah-jawa-barat.jpg',
	maps: 'https://maps.app.goo.gl/yVRUd5J6dPzMYa4d9',
  },
  {
	name: 'Gunung Padang Megalitik',
	location: 'Karyamukti, Cianjur',
	category: 'Gunung',
	description:
	  'Situs megalitikum terbesar di Asia Tenggara, trekking menantang, pemandangan perbukitan hijau, dan energi spiritual yang kuat.',
	price: 'Rp 10.000 - Rp 20.000',
	image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Situs_Megalitikum_Gunung_Padang_Cianjur.jpg',
	maps: 'https://maps.app.goo.gl/Y4wfocDz65L8nMVB9',
  },
  {
	name: 'Curug Batu Templek',
	location: 'Cihideung, Parongpong, Bandung Barat',
	category: 'Curug',
	description:
	  'Air terjun tersembunyi dengan kolam alami jernih, trekking 30-45 menit, cocok untuk berenang dan menyegarkan diri.',
	price: 'Rp 5.000 - Rp 10.000',
	image: 'https://assets-a1.kompasiana.com/items/album/2022/11/11/whatsapp-image-2022-11-11-at-05-35-14-1-636da93e49434703110c4c82.jpeg?t=o&v=770',
	maps: 'https://maps.app.goo.gl/6EHNpLGFj7sQ9ceWA',
  },
  {
	name: 'Bukit Panembongan',
	location: 'Panembongan, Kuningan',
	category: 'Bukit',
	description:
	  'Pemandangan 360 derajat, sunrise dan sunset spektakuler, spot camping, dan meditasi di alam terbuka.',
	price: 'Rp 7.000',
	image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/251/2024/10/01/wisata-bukit-panembongan-767977074.jpg',
	maps: 'https://maps.app.goo.gl/SPcankR1C5FwWbdx9',
  },
  {
	name: 'Pantai Karang Bolong',
	location: 'Anyer, Serang, Banten',
	category: 'Pantai',
	description:
	  'Pantai unik dengan formasi batu kapur berlubang, pasir hitam vulkanik, dan suasana alami yang tenang.',
	price: 'Rp 10.000 - Rp 15.000',
	image: 'https://disparbud.kebumenkab.go.id/assets/images/post/disparbud_kebumenkab_go_id_031022-4.jpg',
	maps: 'https://maps.app.goo.gl/qoBMkcow6hUM23Q5A',
  },
  {
	name: 'Taman Wisata Alam Maribaya',
	location: 'Maribaya, Lembang, Bandung Barat',
	category: 'Taman',
	description:
	  'Air terjun, pemandian air panas, hutan pinus, area camping, hiking, dan forest bathing.',
	price: 'Rp 30.000 - Rp 50.000',
	image: 'https://cozzy.id/uploads/0000/630/2024/08/15/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-the-lodge-maribaya-surga-wisata-alam-di-lembang-sumber-gambar-superlive.jpg',
	maps: 'https://maps.app.goo.gl/amNsaEArvXEhUfLi6',
  },
  {
	name: 'Waduk Jatiluhur',
	location: 'Jatiluhur, Purwakarta',
	category: 'Waduk',
	description:
	  'Waduk terbesar di Indonesia, berperahu, memancing, sunset, dan spot Pulau Situ Buleud.',
	price: 'Rp 15.000 - Rp 25.000',
	image: 'https://ik.imagekit.io/tvlk/blog/2022/05/Wisata-Waduk-Jatiluhur.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
	maps: 'https://maps.app.goo.gl/HRoAeaLVacqzyPi17',
  },
  {
	name: 'Gunung Papandayan',
	location: 'Cisurupan, Garut',
	category: 'Gunung',
	description:
	  'Gunung berapi aktif, kawah spektakuler, Surya Kencana, hutan mati, dan trekking mudah untuk pemula.',
	price: 'Rp 20.000 - Rp 30.000',
	image: 'https://inforadar.disway.id/upload/c0e7e8817cf42a2d0b86c4640836425b.jpg',
	maps: 'https://maps.app.goo.gl/bBLQgJTcYAzxJDRv9',
  },
  {
	name: 'Cagar Alam Leuweung Sancang',
	location: 'Garut Selatan, Garut',
	category: 'Cagar Alam',
	description:
	  'Hutan lindung dengan keanekaragaman hayati, trekking, birdwatching, dan air terjun tersembunyi.',
	price: 'Rp 10.000 - Rp 15.000',
	image: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p3/103/2024/09/01/2151794721-3185472340.jpg',
	maps: 'https://maps.app.goo.gl/JpnGm54pAwZCtmeF8',
  },
  {
	name: 'Danau Situ Cileunca',
	location: 'Pangalengan, Bandung',
	category: 'Danau',
	description:
	  'Danau buatan, perkebunan teh, berperahu, camping, dan spot fotografi romantis.',
	price: 'Rp 15.000 - Rp 25.000',
	image: 'https://7bd86aba206a59981820-a1471e32c826f82a376e3a3b16604284.ssl.cf6.rackcdn.com/2015/11/danau-cileunca.jpg',
	maps: 'https://maps.app.goo.gl/fyymBDsynpAd3XEN9',
  },
  {
	name: 'Curug Cimahi (Rainbow Falls)',
	location: 'Cimahi, Bandung Barat',
	category: 'Curug',
	description:
	  'Air terjun dengan fenomena pelangi alami, trekking ringan, gazebo, dan spot foto menarik.',
	price: 'Rp 15.000 - Rp 20.000',
	image: 'https://cnc-magazine.oramiland.com/parenting/images/124654842_795190731327115_2569341.width-800.format-webp.webp',
	maps: 'https://maps.app.goo.gl/qmppV1zTGnPYWoqY7',
  },
  {
	name: 'Taman Satwa Cikembulan',
	location: 'Kadungora, Garut',
	category: 'Taman',
	description:
	  'Kebun binatang kecil di pedesaan, koleksi satwa, bungalow, dan pengalaman konservasi satwa.',
	price: 'Rp 20.000 - Rp 35.000',
	image: 'https://img.kliknusae.com/uploads/2021/11/Papandayan.jpg',
	maps: 'https://maps.app.goo.gl/QZ9d5kTdi5PuM8HM7',
  },
];

const SustainableDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

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


  // Mapping kategori ke ikon
  const categoryIcons: Record<string, JSX.Element> = {
	'Semua': <Star className="inline-block mr-2 h-4 w-4" />,
	'Gunung': <Mountain className="inline-block mr-2 h-4 w-4" />,
	'Danau': <Droplet className="inline-block mr-2 h-4 w-4" />,
	'Pantai': <Globe className="inline-block mr-2 h-4 w-4" />,
	'Curug': <Droplets className="inline-block mr-2 h-4 w-4" />,
	'Taman': <Leaf className="inline-block mr-2 h-4 w-4" />,
	'Bukit': <Mountain className="inline-block mr-2 h-4 w-4" />,
	'Waduk': <Droplet className="inline-block mr-2 h-4 w-4" />,
	'Pulau': <Globe className="inline-block mr-2 h-4 w-4" />,
	'Tebing': <Landmark className="inline-block mr-2 h-4 w-4" />,
	'Cagar Alam': <Leaf className="inline-block mr-2 h-4 w-4" />,
	'Hutan': <Globe className="inline-block mr-2 h-4 w-4" />,
	'Satwa': <PawPrint className="inline-block mr-2 h-4 w-4" />,
  };

  // Ambil semua kategori unik
  const categories = [
	'Semua',
	...Array.from(new Set(destinations.map((d) => d.category)))
  ];

  // Filter destinasi sesuai kategori
  const filteredDestinations =
	selectedCategory === 'Semua'
	  ? destinations
	  : destinations.filter((d) => d.category === selectedCategory);

  return (
	<div>
	  <Hero
		title="exploring West Java"
		subtitle="15 Hidden Gem Alam Jawa Barat & Sekitarnya"
		backgroundImage="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
	  />
	  <div className="relative py-16 bg-cover bg-center sustainable-bg">
		<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
		<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		  <div className="text-center mb-12">
			<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
			  15 Destinasi Alam Hidden Gem Jawa Barat
			</h2>
			<p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow">
			  Scroll menggunakan tanda panah untuk melihat semua destinasi.
			</p>
		  </div>
  {/* Filter kategori dengan ikon - versi minimalis dan scrollable */}
  <div className="mb-8 flex justify-center">
	<div className="flex gap-2 overflow-x-auto scrollbar-hide px-2 py-1 max-w-full sustainable-scroll">
	  {categories.map((cat) => (
		<button
		  key={cat}
		  className={`px-3 py-1 rounded-full border border-green-400 text-xs flex items-center gap-1 whitespace-nowrap transition-all duration-150 min-w-[80px] min-h-[32px] ${selectedCategory === cat ? 'bg-green-500 text-white font-semibold shadow' : 'bg-white text-green-700 hover:bg-green-100'}`}
		  onClick={() => setSelectedCategory(cat)}
		>
		  <span className="mr-1">{categoryIcons[cat] ? React.cloneElement(categoryIcons[cat], { className: 'inline-block h-3 w-3 mr-1' }) : <Star className="inline-block h-3 w-3 mr-1" />}</span>
		  {cat}
		</button>
	  ))}
	</div>
  </div>
		  <div className="relative overflow-hidden">
			{/* Tombol panah hanya di desktop/tablet */}
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
		className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-x-hidden sustainable-smooth"
	  >
			  <div className="flex space-x-6 min-w-[900px]">
				{filteredDestinations.map((dest, idx) => (
				  <div
					key={idx}
					className="bg-white rounded-lg shadow-lg min-w-[320px] max-w-xs flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
				  >
					{dest.maps ? (
					  <a href={dest.maps} target="_blank" rel="noopener noreferrer">
			<img
			  src={dest.image}
			  alt={dest.name}
			  className="rounded-t-lg w-full h-40 object-cover cursor-pointer hover:brightness-90 transition"
			  loading="lazy"
			/>
					  </a>
					) : (
		  <img
			src={dest.image}
			alt={dest.name}
			className="rounded-t-lg w-full h-40 object-cover"
			loading="lazy"
		  />
					)}
					<div className="p-6 flex flex-col h-full justify-between">
					  <div>
						<div className="flex items-center text-gray-500 text-sm mb-2">
						  <MapPin className="h-4 w-4 mr-1" />
						  {dest.location}
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-1">
						  {dest.name}
						</h3>
						<div className="flex items-center text-green-600 mb-2">
						  <DollarSign className="h-4 w-4 mr-1" />
						  <span className="text-sm font-medium">
							{dest.price}
						  </span>
						</div>
						<p className="text-gray-600 mb-4 text-sm leading-relaxed">
						  {dest.description}
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

export default SustainableDestinations;