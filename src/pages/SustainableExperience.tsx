import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const experiences = [
	{
		title: 'Workshop Batik Tradisional Trusmi',
		location: 'Desa Trusmi, Kecamatan Plered, Kabupaten Cirebon',
		price: 'Rp 75.000 - Rp 150.000',
		description:
			'Belajar seni batik tulis dari pengrajin lokal, menggunakan bahan alami yang ramah lingkungan dan mendukung ekonomi kreatif serta pelestarian tradisi batik Cirebon.',
		image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://maps.app.goo.gl/z5LU5cFk6HntW9UX9',
	},
	{
		title: 'Cycling Tour Jalur Hijau Bandung',
		location: 'Rute Dago - Lembang - Subang, Kabupaten Bandung',
		price: 'Rp 100.000 - Rp 200.000',
		description:
			'Bersepeda di jalur hijau pegunungan, mendukung transportasi ramah lingkungan dan pariwisata berkelanjutan dengan melibatkan komunitas lokal.',
		image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Pertunjukan Wayang Kulit Interaktif',
		location: 'Pendopo Kabupaten Sumedang, Jalan Prabu Gajah Agung',
		price: 'Rp 25.000 - Rp 50.000',
		description:
			'Pengalaman budaya mendalam, belajar filosofi Jawa, teknik dalang, dan gamelan sambil mendukung pelestarian seni tradisional.',
		image: 'https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: '',
	},
	{
		title: 'Eco-Cycling di Kawasan Geopark Ciletuh',
		location: 'Geopark Ciletuh, Kabupaten Sukabumi',
		price: 'Rp 125.000 - Rp 250.000',
		description:
			'Bersepeda sambil belajar geologi dan konservasi lingkungan, mendukung community-based tourism dan konservasi geologi.',
		image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://www.google.com/maps/dir//CILETUH+GEOPARK,+Ciwaru,+Ciemas,+Sukabumi+Regency,+West+Java+43177/@-7.1813863,106.4604095,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x2e42a174c692426f:0xb63a761249266e9f!2m2!1d106.4628179!2d-7.1812356?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D',
	},
	{
		title: 'Workshop Kerajinan Bambu Berkelanjutan',
		location: 'Desa Rajapolah, Kecamatan Rajapolah, Kabupaten Tasikmalaya',
		price: 'Rp 60.000 - Rp 120.000',
		description:
			'Belajar membuat produk bambu ramah lingkungan, mendukung ekonomi kreatif lokal dan prinsip circular economy.',
		image: 'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://maps.app.goo.gl/XufxrurgasH1fZXFA',
	},
	{
		title: 'Organic Farm Experience',
		location: 'Floating Market Lembang, Jalan Grand Hotel Lembang',
		price: 'Rp 80.000 - Rp 160.000',
		description:
			'Pengalaman pertanian organik, belajar teknik bercocok tanam tanpa pestisida, mendukung petani lokal dan edukasi urban farming.',
		image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://maps.app.goo.gl/FEAhmDDM5EVWZKcb7',
	},
	{
		title: 'Traditional Pottery Workshop',
		location: 'Desa Plered, Kecamatan Plered, Kabupaten Purwakarta',
		price: 'Rp 50.000 - Rp 100.000',
		description:
			'Belajar membuat keramik dengan teknik tradisional, mendukung pelestarian kerajinan dan pemberdayaan pengrajin lokal.',
		image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://maps.app.goo.gl/msWXuXKvUVBW1P6V8',
	},
	{
		title: 'Cycling Heritage Trail',
		location: 'Rute Braga - Asia Afrika - Alun-alun Bandung',
		price: 'Rp 75.000 - Rp 150.000',
		description:
			'Bersepeda menjelajahi sejarah dan arsitektur kota Bandung, mendukung local businesses dan edukasi urban heritage.',
		image: 'https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
		maps: 'https://maps.app.goo.gl/16sVkVs3xWgsmK657',
	},
];

const SustainableExperience = () => {
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
				title="Sustainable Experience"
				subtitle="15 Aktivitas Berkelanjutan di Jawa Barat"
				backgroundImage="https://images.pexels.com/photos/6128025/pexels-photo-6128025.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
			/>
			<div className="relative py-16 bg-[url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
							15 Sustainable Experience Jawa Barat
						</h2>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow">
							Temukan berbagai aktivitas berkelanjutan yang mendukung pelestarian
							budaya, lingkungan, dan ekonomi lokal.
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
							className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-x-hidden scroll-smooth"
						>
							<div className="flex space-x-6 min-w-[900px]">
								{experiences.map((exp, idx) => (
									<div
										key={idx}
										className="bg-white rounded-lg shadow-lg min-w-[320px] max-w-xs flex-shrink-0 hover:shadow-xl transition-shadow duration-300"
									>
										{exp.maps ? (
											<a href={exp.maps} target="_blank" rel="noopener noreferrer">
												<img
													src={exp.image}
													alt={exp.title}
													className="rounded-t-lg w-full h-40 object-cover cursor-pointer hover:brightness-90 transition"
												/>
											</a>
										) : (
											<img
												src={exp.image}
												alt={exp.title}
												className="rounded-t-lg w-full h-40 object-cover"
											/>
										)}
										<div className="p-6 flex flex-col h-full justify-between">
											<div>
												<div className="flex items-center text-gray-500 text-sm mb-2">
													<MapPin className="h-4 w-4 mr-1" />
													{exp.location}
												</div>
												<h3 className="text-xl font-bold text-gray-800 mb-2">
													{exp.title}
												</h3>
												<p className="text-gray-600 mb-4 text-sm leading-relaxed">
													{exp.description}
												</p>
											</div>
											<div className="flex items-center text-green-600 mt-2">
												<DollarSign className="h-4 w-4 mr-1" />
												<span className="text-sm font-medium">{exp.price}</span>
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

export default SustainableExperience;