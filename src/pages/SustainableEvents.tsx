import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
	{
		title: 'Bandung Eco Festival',
		location: 'Taman Hutan Raya Juanda, Bandung',
		price: 'Rp 25.000 - Rp 75.000',
		description:
			'Festival tahunan yang memfokuskan pada kesadaran lingkungan dan praktik berkelanjutan, menampilkan workshop, penanaman pohon, daur ulang kreatif, pertunjukan seni, dan booth UMKM produk ramah lingkungan.',
		image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Green Living Expo Bandung',
		location: 'Trans Studio Convention Center, Bandung',
		price: 'Rp 15.000 - Rp 50.000',
		description:
			'Pameran inovasi teknologi hijau, produk ramah lingkungan, panel surya, kendaraan listrik, seminar dan workshop gaya hidup berkelanjutan.',
		image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Dusun Bambu Trail Run',
		location: 'Dusun Bambu, Lembang, Kabupaten Bandung Barat',
		price: 'Rp 150.000 - Rp 300.000',
		description:
			'Event lari eco-friendly, race pack dan medali dari bahan daur ulang, penanaman pohon, dan sistem registrasi digital.',
		image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Ciwidey Organic Festival',
		location: 'Kawasan Wisata Ciwidey, Kabupaten Bandung',
		price: 'Rp 20.000 - Rp 65.000',
		description:
			'Festival pertanian organik, produk lokal, workshop teknik pertanian organik, kuliner sehat, dan edukasi anak-anak.',
		image: 'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Tangkuban Perahu Eco Adventure',
		location: 'Kawasan Wisata Tangkuban Perahu, Lembang',
		price: 'Rp 100.000 - Rp 250.000',
		description:
			'Adventure tour berkelanjutan, hiking, edukasi ekosistem gunung berapi, program Leave No Trace, dan perlengkapan ramah lingkungan.',
		image: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Subang Green Technology Exhibition',
		location: 'Subang Convention Center, Subang',
		price: 'Rp 10.000 - Rp 40.000',
		description:
			'Pameran teknologi hijau, energi terbarukan, pertanian modern, demo biogas, solar panel, dan workshop teknologi hijau.',
		image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Bogor Sustainable Fashion Week',
		location: 'Kebun Raya Bogor dan sekitarnya',
		price: 'Rp 50.000 - Rp 150.000',
		description:
			'Fashion week berkelanjutan, runway show outdoor, workshop upcycling, ethical fashion, dan merchandise ramah lingkungan.',
		image: 'https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Cirebon Renewable Energy Summit',
		location: 'Cirebon Convention Center',
		price: 'Rp 75.000 - Rp 200.000',
		description:
			'Summit energi terbarukan, exhibition teknologi solar, wind, biomass, workshop instalasi, dan networking stakeholder energi hijau.',
		image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Karawang Eco-Industrial Park Forum',
		location: 'Kawasan Industri Karawang',
		price: 'Rp 100.000 - Rp 300.000',
		description:
			'Forum industri berkelanjutan, plant visit, waste management, energy efficiency, dan green supply chain.',
		image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Tasikmalaya Craft & Sustainability Festival',
		location: 'Alun-alun Tasikmalaya',
		price: 'Rp 15.000 - Rp 45.000',
		description:
			'Festival kerajinan tradisional, workshop daur ulang, area edukasi, dan packaging biodegradable.',
		image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Bekasi Urban Farming Expo',
		location: 'Summarecon Mall Bekasi',
		price: 'Rp 20.000 - Rp 60.000',
		description:
			'Pameran urban farming, vertical farming, hydroponics, aquaponics, workshop kompos, dan teknologi smart farming.',
		image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Sukabumi Ecotourism Festival',
		location: 'Taman Nasional Gunung Gede Pangrango, Sukabumi',
		price: 'Rp 35.000 - Rp 120.000',
		description:
			'Festival wisata alam berkelanjutan, hiking, bird watching, nature photography, dan community-based tourism.',
		image: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Bandung Barat Organic Market Festival',
		location: 'Kota Baru Parahyangan, Bandung Barat',
		price: 'Rp 10.000 - Rp 35.000',
		description:
			'Festival pasar organik, produk segar petani lokal, cooking demo, workshop makanan sehat, dan kemasan ramah lingkungan.',
		image: 'https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Cimahi Green Building Exhibition',
		location: 'Cimahi Convention Center',
		price: 'Rp 25.000 - Rp 80.000',
		description:
			'Pameran green building, seminar desain berkelanjutan, demo teknologi hijau, dan sertifikasi green building.',
		image: 'https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Purwakarta Zero Waste Festival',
		location: 'Situ Buleud, Purwakarta',
		price: 'Rp 15.000 - Rp 50.000',
		description:
			'Festival zero waste lifestyle, workshop reduce-reuse-recycle, produk refill, edukasi dampak sampah, dan semua sampah didaur ulang.',
		image: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
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
												<p className="text-gray-600 mb-4 text-sm leading-relaxed">
													{event.description}
												</p>
											</div>
											<div className="flex items-center text-green-600 mt-2">
												<DollarSign className="h-4 w-4 mr-1" />
												<span className="text-sm font-medium">
													{event.price}
												</span>
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