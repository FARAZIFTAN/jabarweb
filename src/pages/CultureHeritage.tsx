import React from 'react';

const sections = [
	{
		title: 'Warisan Budaya yang Kaya dan Lestari',
		text: `Jawa Barat memiliki kekayaan budaya yang diwariskan turun-temurun. Kesenian tradisional seperti angklung, wayang golek, jaipong, serta bahasa Sunda yang digunakan luas dalam kehidupan sehari-hari, menjadi cerminan harmoni antara warisan leluhur dan semangat modernisasi. Setiap daerah memiliki ciri khas budaya, seperti upacara adat Seren Taun di Kuningan dan Ngaben Dayeuh di Garut, yang membuktikan hidupnya nilai-nilai kearifan lokal.`,
		image: 'https://images.pexels.com/photos/1643381/pexels-photo-1643381.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
	},
	{
		title: 'Jejak Sejarah yang Membentuk Identitas',
		text: `Sejarah panjang Jawa Barat membentuk identitas masyarakatnya. Dari era Kerajaan Sunda Galuh dan Pajajaran, masa kolonial Belanda, hingga perjuangan kemerdekaan, wilayah ini menjadi saksi penting dinamika sejarah Indonesia. Bangunan bersejarah seperti Gedung Sate, Keraton Kasepuhan Cirebon, dan Museum Sri Baduga memadukan arsitektur kolonial dan nilai tradisional yang tetap lestari.`,
		image: 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
	},
	{
		title: 'Tradisi dan Alam yang Terjaga',
		text: `Budaya Sunda sangat erat dengan alam. Filosofi “leuweung ruksak, cai beak, manusa balangsak” (hutan rusak, air habis, manusia menderita) mengingatkan pentingnya menjaga lingkungan. Konsep Jawa Barat Lestari menekankan kesinambungan antara budaya, alam, dan teknologi. Melalui pelestarian alam dan budaya, masyarakat Jawa Barat menunjukkan komitmen terhadap keberlanjutan dan keharmonisan hidup.`,
		image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
	},
	{
		title: 'Revitalisasi Budaya Lewat Teknologi',
		text: `Website Jawa Barat Lestari menjadi ruang digital yang memadukan budaya dan teknologi untuk memperkenalkan serta melestarikan kekayaan lokal kepada generasi muda. Melalui platform ini, pengguna dapat mengakses informasi budaya, sejarah, dan pelestarian lingkungan dalam format interaktif dan edukatif, menjadikan warisan budaya bagian aktif kehidupan modern.`,
		image: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
	},
];

const CultureHeritage = () => {
	return (
		<div className="min-h-screen w-full">
			<div className="relative py-16 bg-[url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')] bg-cover bg-center">
				<div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
				<div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center drop-shadow-lg">
						Budaya & Sejarah - Jawa Barat Lestari
					</h1>
					<div className="space-y-12">
						{sections.map((sec, idx) => (
							<div
								key={idx}
								className={`rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row bg-white/80 backdrop-blur-lg ${
									idx % 2 === 0 ? '' : 'md:flex-row-reverse'
								}`}
							>
								<div className="md:w-1/2 w-full h-64 md:h-auto">
									<img
										src={sec.image}
										alt={sec.title}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-8 flex flex-col justify-center md:w-1/2">
									<h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
										{sec.title}
									</h2>
									<p className="text-gray-700 text-lg leading-relaxed">
										{sec.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CultureHeritage;
