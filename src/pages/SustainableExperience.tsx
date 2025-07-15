import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { MapPin, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';

const experiences = [
// ...existing code...
  {
	title: 'Workshop Batik Tradisional Trusmi, Cirebon',
	location: 'Desa Trusmi, Cirebon',
	price: 'Rp 75.000 - Rp 150.000',
	description: 'Belajar batik tulis dari pengrajin lokal dengan bahan alami dan filosofi motif.',
	image: 'https://jogjakonveksi.id/wp-content/uploads/2023/04/batik-trusmi-cirebon.jpg',
	maps: '',
  },
  {
	title: 'Cycling Tour Jalur Hijau Bandung',
	location: 'Dago - Lembang - Subang',
	price: 'Rp 100.000 - Rp 200.000',
	description: 'Bersepeda di jalur hijau pegunungan, mendukung transportasi ramah lingkungan.',
	image: 'https://assets-a1.kompasiana.com/items/album/2022/06/28/3d365ecf-aebc-4789-83e1-19caf7d752db-62ba750e533a0d38fa05b732.jpg?t=o&v=780',
	maps: '',
  },
  {
	title: 'Pertunjukan Wayang Kulit Interaktif, Sumedang',
	location: 'Pendopo Sumedang',
	price: 'Rp 25.000 - Rp 50.000',
	description: 'Belajar filosofi Jawa dan teknik dalang dalam pertunjukan wayang kulit.',
	image: 'https://cdn.rri.co.id/berita/Surakarta/o/1724685531424-cmswygklt/rs2jzr7425dx9qa.jpeg',
	maps: '',
  },
  {
	title: 'Eco-Cycling Geopark Ciletuh',
	location: 'Geopark Ciletuh, Sukabumi',
	price: 'Rp 125.000 - Rp 250.000',
	description: 'Bersepeda sambil belajar geologi dan konservasi lingkungan.',
	image: 'https://www.beritainspiratif.com/assets/uploads/2022/08/1tlazbr5d93qd_mid.jpg',
	maps: '',
  },
  {
	title: 'Workshop Kerajinan Bambu, Tasikmalaya',
	location: 'Rajapolah, Tasikmalaya',
	price: 'Rp 60.000 - Rp 120.000',
	description: 'Belajar membuat produk bambu ramah lingkungan dan inovasi desain.',
	image: 'https://i0.wp.com/jnewsonline.com/wp-content/uploads/2025/03/anyaman-bambu-2.jpg?resize=1000%2C600&ssl=1',
	maps: '',
  },
  {
	title: 'Organic Farm Experience, Lembang',
	location: 'Floating Market Lembang',
	price: 'Rp 80.000 - Rp 160.000',
	description: 'Belajar pertanian organik, teknik tanam tanpa pestisida, dan urban farming.',
	image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2025/03/05/757d22bb-98ec-41bc-93c6-112b2ed95019-1741158906606-734715f17db3f2f7fa9812df679390eb.jpg',
	maps: '',
  },
  {
	title: 'Pottery Workshop, Plered',
	location: 'Desa Plered, Purwakarta',
	price: 'Rp 50.000 - Rp 100.000',
	description: 'Belajar membuat keramik tradisional dari tanah liat lokal.',
	image: 'https://static.wixstatic.com/media/nsplsh_a04d825adfa34231b31db9d087c89ff1~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_a04d825adfa34231b31db9d087c89ff1~mv2.jpg',
	maps: '',
  },
  {
	title: 'Cycling Coffee Plantation Tour, Pangalengan',
	location: 'Pangalengan, Bandung',
	price: 'Rp 150.000 - Rp 300.000',
	description: 'Bersepeda di perkebunan kopi dan belajar proses kopi berkelanjutan.',
	image: 'https://paketwisatabandung.id/wp-content/uploads/2025/01/62307b1d47185.jpg',
	maps: '',
  },
  {
	title: 'Weaving Workshop, Garut',
	location: 'Sentra Tenun Garut',
	price: 'Rp 70.000 - Rp 140.000',
	description: 'Belajar tenun tradisional dan teknik pewarnaan alami.',
	image: 'https://bnsd.binus.ac.id/wp-content/uploads/2022/06/03.jpg',
	maps: '',
  },
  {
	title: 'Wayang Golek Performance, Bogor',
	location: 'Taman Budaya Bogor',
	price: 'Rp 30.000 - Rp 60.000',
	description: 'Menonton dan belajar memainkan wayang golek Sunda.',
	image: 'https://img.inews.co.id/media/1200/files/inews_new/2022/06/30/wayang_golek.jpg',
	maps: '',
  },
  {
	title: 'Sustainable Fishing Experience, Palabuhanratu',
	location: 'Palabuhanratu, Sukabumi',
	price: 'Rp 100.000 - Rp 200.000',
	description: 'Menangkap ikan dengan teknik tradisional ramah lingkungan.',
	image: 'https://images.elearncollege.com/wp-content/uploads/2024/05/347.webp',
	maps: '',
  },
  {
	title: 'Eco-Art Installation Workshop, Bandung',
	location: 'Tahura Djuanda, Bandung',
	price: 'Rp 90.000 - Rp 180.000',
	description: 'Membuat instalasi seni dari material daur ulang dan upcycling.',
	image: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/6c494b12-a069-48ce-bd68-3124331a56d6/dbb281c6-c423-4afc-ac9a-aeed7a8936fe.png',
	maps: '',
  },
  {
	title: 'Music & Dance Performance, Cirebon',
	location: 'Keraton Kasepuhan, Cirebon',
	price: 'Rp 40.000 - Rp 80.000',
	description: 'Menonton dan belajar seni musik serta tari tradisional Cirebon.',
	image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Beautiful_of_mask_dance_cirebon.jpg/1200px-Beautiful_of_mask_dance_cirebon.jpg',
	maps: '',
  },
  {
	title: 'Beekeeping Experience, Subang',
	location: 'Desa Cijambe, Subang',
	price: 'Rp 80.000 - Rp 160.000',
	description: 'Belajar budidaya lebah dan panen madu organik.',
	image: 'https://www.aciar.gov.au/sites/default/files/2021-12/DSC_8115%20copy_web.jpg',
	maps: '',
  },
  {
	title: 'Cycling Heritage Trail, Bandung',
	location: 'Braga - Asia Afrika - Alun-alun Bandung',
	price: 'Rp 75.000 - Rp 150.000',
	description: 'Bersepeda menjelajahi sejarah dan arsitektur kota Bandung.',
	image: 'https://www.mainsepeda.com/uploads/post/2018/10/07/IMG-20181007-WA0095.jpg',
	maps: '',
  }
]

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
	  <div className="flex items-center text-green-600 mb-2">
		<DollarSign className="h-4 w-4 mr-1" />
		<span className="text-sm font-medium">{exp.price}</span>
	  </div>
	  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
		{exp.description}
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

export default SustainableExperience;