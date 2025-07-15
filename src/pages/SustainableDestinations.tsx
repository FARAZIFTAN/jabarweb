import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, Star, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
	{
		name: 'Kepulauan Biawak',
		location: 'Indramayu, Jawa Barat',
		description:
			'Pulau Biawak adalah destinasi tersembunyi yang menawarkan keindahan alam laut yang masih alami, habitat komodo kecil (biawak), burung langka, pantai berpasir putih, dan mercusuar peninggalan Belanda.',
		price: 'Rp 5.000 - Rp 15.000 (kapal Rp 200.000 - Rp 500.000)',
		image: 'src/assets/images/pulau-biawak.jpg',
		maps: 'https://maps.app.goo.gl/VHVTKz42C3Jspd7HA',
	},
	{
		name: 'Sanghyang Heuleut',
		location: 'Rajamandala, Bandung Barat',
		description:
			'Laguna alami dikelilingi bebatuan purba, air jernih kehijauan, kolam eksotis, dan formasi batu karst yang memukau. Cocok untuk healing dan refreshing.',
		price: 'Rp 10.000 - Rp 15.000',
		image: 'src/assets/images/Sanghyang-Heuleut.jpg',
		maps: 'https://maps.app.goo.gl/5pYETysE49dFYXLw6',
	},
	{
		name: 'Tebing Citatah',
		location: 'Bojong Loa, Cipatat, Bandung Barat',
		description:
			'Tebing kapur spektakuler dengan aktivitas flying fox, rock climbing, dan fotografi landscape. Spot pre-wedding yang instagramable.',
		price: 'Rp 20.000 - Rp 30.000',
		image: 'src/assets/images/Tebing-Citatah.jpg',
		maps: 'https://maps.app.goo.gl/yVRUd5J6dPzMYa4d9',
	},
	{
		name: 'Gunung Padang Megalitik',
		location: 'Karyamukti, Cianjur',
		description:
			'Situs megalitikum terbesar di Asia Tenggara, trekking menantang, pemandangan perbukitan hijau, dan energi spiritual yang kuat.',
		price: 'Rp 10.000 - Rp 20.000',
		image: 'src/assets/images/gunung.jpg',
		maps: 'https://maps.app.goo.gl/Y4wfocDz65L8nMVB9',
	},
	{
		name: 'Curug Batu Templek',
		location: 'Cihideung, Parongpong, Bandung Barat',
		description:
			'Air terjun tersembunyi dengan kolam alami jernih, trekking 30-45 menit, cocok untuk berenang dan menyegarkan diri.',
		price: 'Rp 5.000 - Rp 10.000',
		image: 'src/assets/images/curug.jpg',
		maps: 'https://maps.app.goo.gl/6EHNpLGFj7sQ9ceWA',
	},
	{
		name: 'Bukit Panembongan',
		location: 'Panembongan, Kuningan',
		description:
			'Pemandangan 360 derajat, sunrise dan sunset spektakuler, spot camping, dan meditasi di alam terbuka.',
		price: 'Rp 7.000',
		image: 'src/assets/images/bukit.jpeg',
		maps: 'https://maps.app.goo.gl/SPcankR1C5FwWbdx9',
	},
	{
		name: 'Pantai Karang Bolong',
		location: 'Anyer, Serang, Banten',
		description:
			'Pantai unik dengan formasi batu kapur berlubang, pasir hitam vulkanik, dan suasana alami yang tenang.',
		price: 'Rp 10.000 - Rp 15.000',
		image: 'src/assets/images/pantai.jpg',
		maps: 'https://maps.app.goo.gl/qoBMkcow6hUM23Q5A',
	},
	{
		name: 'Taman Wisata Alam Maribaya',
		location: 'Maribaya, Lembang, Bandung Barat',
		description:
			'Air terjun, pemandian air panas, hutan pinus, area camping, hiking, dan forest bathing.',
		price: 'Rp 30.000 - Rp 50.000',
		image: 'src/assets/images/maribaya.jpg',
		maps: 'https://maps.app.goo.gl/amNsaEArvXEhUfLi6',
	},
	{
		name: 'Waduk Jatiluhur',
		location: 'Jatiluhur, Purwakarta',
		description:
			'Waduk terbesar di Indonesia, berperahu, memancing, sunset, dan spot Pulau Situ Buleud.',
		price: 'Rp 15.000 - Rp 25.000',
		image: 'src/assets/images/waduk.jpg',
		maps: 'https://maps.app.goo.gl/HRoAeaLVacqzyPi17',
	},
	{
		name: 'Gunung Papandayan',
		location: 'Cisurupan, Garut',
		description:
			'Gunung berapi aktif, kawah spektakuler, Surya Kencana, hutan mati, dan trekking mudah untuk pemula.',
		price: 'Rp 20.000 - Rp 30.000',
		image: 'src/assets/images/papandayangan.jpeg',
		maps: 'https://maps.app.goo.gl/bBLQgJTcYAzxJDRv9',
	},
	{
		name: 'Cagar Alam Leuweung Sancang',
		location: 'Garut Selatan, Garut',
		description:
			'Hutan lindung dengan keanekaragaman hayati, trekking, birdwatching, dan air terjun tersembunyi.',
		price: 'Rp 10.000 - Rp 15.000',
		image: 'src/assets/images/hutan.jpg',
		maps: 'https://maps.app.goo.gl/JpnGm54pAwZCtmeF8',
	},
	{
		name: 'Danau Situ Cileunca',
		location: 'Pangalengan, Bandung',
		description:
			'Danau buatan, perkebunan teh, berperahu, camping, dan spot fotografi romantis.',
		price: 'Rp 15.000 - Rp 25.000',
		image: 'src/assets/images/danau.jpg',
		maps: 'https://maps.app.goo.gl/fyymBDsynpAd3XEN9',
	},
	{
		name: 'Curug Cimahi (Rainbow Falls)',
		location: 'Cimahi, Bandung Barat',
		description:
			'Air terjun dengan fenomena pelangi alami, trekking ringan, gazebo, dan spot foto menarik.',
		price: 'Rp 15.000 - Rp 20.000',
		image: 'src/assets/images/curug-cimahi.jpg',
		maps: 'https://maps.app.goo.gl/qmppV1zTGnPYWoqY7',
	},
	{
		name: 'Taman Satwa Cikembulan',
		location: 'Kadungora, Garut',
		description:
			'Kebun binatang kecil di pedesaan, koleksi satwa, bungalow, dan pengalaman konservasi satwa.',
		price: 'Rp 20.000 - Rp 35.000',
		image: 'src/assets/images/taman.jpg',
		maps: 'https://maps.app.goo.gl/QZ9d5kTdi5PuM8HM7',
	},
	{
		name: 'Orchid Forest Cikole',
		location: 'Cikole, Lembang, Bandung Barat',
		description:
			'Hutan pinus dan koleksi anggrek langka, 157 jenis anggrek, suasana sejuk dan asri.',
		price: 'Cek ke pengelola',
		image: 'src/assets/images/forest.jpg',
		maps: 'https://maps.app.goo.gl/CcMvgiusXiPW9oaF6',
	},
];

const SustainableDestinations = () => {
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
				title="Sustainable Destinations"
				subtitle="15 Hidden Gem Alam Jawa Barat & Sekitarnya"
				backgroundImage="https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
			/>
			<div className="relative py-16" style={{ backgroundImage: 'url(https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
		className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-x-hidden"
		style={{ scrollBehavior: 'smooth' }}
	  >
		<div className="flex space-x-6 min-w-[900px]">
		  {destinations.map((dest, idx) => (
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
				  />
				</a>
			  ) : (
				<img
				  src={dest.image}
				  alt={dest.name}
				  className="rounded-t-lg w-full h-40 object-cover"
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