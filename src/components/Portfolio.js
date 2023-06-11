import React, { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Portfolio() {
  const Data = [
    {
      id: 1,
      name: 'Investasi UMKM',
      describe:
        'Investasi UMKM adalah aplikasi web inovatif yang memfasilitasi pertemuan antara investor dan pelaku bisnis UMKM. Melalui aplikasi ini, para investor memiliki kesempatan untuk menginvestasikan dana mereka secara mudah dan aman ke dalam UMKM. Salah satu fitur utama aplikasi ini adalah integrasi pembayaran menggunakan midtrans, yang memungkinkan para investor untuk melakukan pembayaran dengan cepat dan efisien. Dengan demikian, Investasi UMKM menciptakan ekosistem yang saling menguntungkan antara investor dan pelaku bisnis UMKM, mendorong pertumbuhan dan perkembangan sektor UMKM di Indonesia.',
      image: require('../assets/img/web1.JPG'),
      link: 'https://investasi-umkm.netlify.app/',
      skills: [{ skills1: require('../assets/img/pngegg.png'), skills2: require('../assets/img/pngwing.com.png'), skills3: require('../assets/img/react.png'), skills4: require('../assets/img/figma.png') }],
    },
    {
      id: 2,
      name: 'Lee Photoworks',
      link: 'https://keen-hodgkin-e33a72.netlify.app/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'Lee Photoworks adalah portofolio seorang fotografer freelance yang mengkhususkan diri dalam mengabadikan momen-momen indah melalui hasil fotografi yang menakjubkan. Dengan keahlian dan pengalaman yang luas, Lee Photoworks mampu menciptakan karya-karya yang unik dan memukau. Dari potret individu hingga pemotretan pernikahan, setiap proyek fotografi Lee Photoworks menghadirkan keindahan, ekspresi, dan cerita yang terekam dengan sempurna. Dengan kepekaan estetika dan profesionalisme yang tinggi, Lee Photoworks adalah pilihan tepat untuk mempercayakan momen-momen berharga Anda dalam bentuk karya seni fotografi yang mengesankan.',
      image: require('../assets/img/tile2.png'),
    },
    {
      id: 3,
      name: 'PT Global Cendana Ekspor',
      link: 'https://globalcendanaekspor.com/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'PT Global Cendana Ekspor adalah perusahaan yang bergerak di bidang ekspor dan impor bahan baku. Sebagai perusahaan yang berfokus pada perdagangan internasional, PT Global Cendana Ekspor memiliki jaringan luas dan pengalaman yang mendalam dalam memfasilitasi aktivitas perdagangan lintas negara. Perusahaan ini memiliki keahlian dalam mengidentifikasi, memperoleh, dan mengelola pasokan bahan baku yang berkualitas tinggi untuk memenuhi kebutuhan industri. Dengan komitmen pada profesionalisme, keandalan, dan layanan pelanggan yang baik, PT Global Cendana Ekspor menjadi mitra yang dapat diandalkan bagi perusahaan-perusahaan yang membutuhkan pasokan bahan baku untuk mempertahankan operasional dan pertumbuhan bisnis mereka di pasar global.',
      image: require('../assets/img/image1.png'),
    },
    {
      id: 4,
      name: 'PT. Telaga Selat Samudra',
      link: 'https://telagaselatsamudra.com/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'PT. Telaga Selat Samudra (TSS) adalah perusahaan yang secara resmi didirikan pada tahun 2016. Kami adalah perusahaan yang bergerak di bidang jasa konstruksi dan pengembang perumahan. Dengan visi untuk menciptakan proyek-proyek konstruksi berkualitas tinggi dan pengembangan perumahan yang inovatif, TSS berkomitmen untuk memberikan solusi terbaik kepada klien kami. Sebagai penyedia jasa konstruksi, TSS memiliki tim yang terampil dan berpengalaman dalam melaksanakan berbagai proyek konstruksi, termasuk pembangunan gedung komersial, infrastruktur, dan fasilitas industri. Kami berfokus pada kualitas kerja yang tinggi, penggunaan teknologi terkini, serta pemenuhan tenggat waktu yang disepakati, demi kepuasan dan kepercayaan klien.',
      image: require('../assets/img/image2.png'),
    },
    {
      id: 5,
      name: 'DLI Edu Venture',
      link: 'http://dli-eduventure.um.ac.id/',
      skills: [{ skills2: require('../assets/img/codeigniter_3.png'), skills3: require('../assets/img/bootstrap.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'DLI Edu Venture adalah bagian dari PUI-PT DLI (Pusat Unggulan Ipteks Perguruan Tinggi Dalam Negeri) di Universitas Negeri Malang. Kami memiliki fokus pada pengembangan inovasi pembelajaran yang mengganggu secara disruptif dalam era digital milenial. Tujuan utama kami adalah menciptakan produk riset dengan teknologi disruptif yang unggul dan berdaya sains tinggi. Sebagai bagian dari PUI-PT DLI, DLI Edu Venture berkomitmen untuk mengubah paradigma pembelajaran tradisional menjadi pembelajaran yang lebih efektif, interaktif, dan relevan dengan kebutuhan dan gaya belajar siswa pada era digital. Kami menerapkan teknologi disruptif, seperti kecerdasan buatan (AI), augmented reality (AR), virtual reality (VR), dan teknologi lainnya, untuk menciptakan pengalaman pembelajaran yang menarik dan memperluas batas-batas konvensional dalam proses pembelajaran.',
      image: require('../assets/img/dli2.png'),
    },
    {
      id: 6,
      name: 'Portofolio Film maker',
      link: 'https://kind-shannon-3a2466.netlify.app/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'Badhi Fadlul Rahman adalah seorang mahasiswa asal Yogyakarta yang memiliki minat dan bakat di bidang perfilman. Ia merupakan seorang film maker yang berdedikasi dan bersemangat dalam menciptakan karya-karya sinematik yang inspiratif.Sebagai seorang film maker, Badhi menggunakan kamera sebagai alat untuk mengekspresikan ide-ide kreatifnya. Ia memiliki keahlian dalam menggambarkan cerita melalui visual dan suara yang menarik, serta mengatur pengambilan gambar, pencahayaan, dan pengeditan untuk menghasilkan film yang berkualitas',
      image: require('../assets/img/webBadhi2.png'),
    },
    {
      id: 7,
      name: 'Daerah Untuk Negeri',
      link: 'https://www.daerahuntuknegeri.org/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'Daerah Untuk Negeri (DUN) adalah sebuah yayasan independen berbadan hukum  yang memiliki fokus utama pada pengembangan sumber daya manusia Indonesia. Yayasan ini berkomitmen untuk memberikan kontribusi yang signifikan dalam memajukan potensi dan kualitas sumber daya manusia di Indonesia. DUN menyadari bahwa sumber daya manusia yang berkualitas dan memiliki keterampilan yang relevan adalah kunci keberhasilan dalam pembangunan suatu negara. Oleh karena itu, yayasan ini berusaha untuk meningkatkan kompetensi dan kapasitas individu serta mendorong inovasi dan kreativitas dalam berbagai bidang.',
      image: require('../assets/img/dun.png'),
    },
    {
      id: 8,
      name: 'PT Creative Visions Indonesia',
      link: 'https://cv-indonesia.com/',
      skills: [{ skills2: require('../assets/img/tailwind-css.1024x615.png'), skills3: require('../assets/img/react.png'), skills1: require('../assets/img/figma.png') }],
      describe:
        'Creative Visions Indonesia adalah sebuah agensi digital terintegrasi yang berbasis di Jakarta, Indonesia. Kami menyediakan solusi untuk kebutuhan digital Anda, mulai dari pemasaran digital hingga karya kreatif. Kami hadir untuk membantu Anda menghadapi tantangan di era digital dengan memberikan solusi yang inovatif dan efektif. Dengan beragam layanan yang kami tawarkan, kami dapat membantu Anda dalam mengembangkan strategi pemasaran digital, membangun kehadiran online yang kuat, serta menciptakan konten kreatif yang menarik.',
      image: require('../assets/img/cvi.png'),
    },
  ]
  const { darkMode } = useContext(ThemeContext)
  const [showMore, setShowMore] = useState({})

  const toggleShowMore = (id) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [id]: !prevShowMore[id],
    }))
  }

  return (
    <div className="grid xxl:grid-cols-3 xxl:gap-x-[2rem] xxl:gap-y-[2rem] xxl:mx-[6%] xxl:my-[1rem] xs:mx-[3%] xs:my-[1rem] xs:space-y-4 sm:mx-[3%] sm:my-[1rem] sm:space-y-4 md:grid-cols-2 md:mx-[3%] md:my-[1rem] md:gap-4 lg:grid-cols-2 lg:mx-[3%] lg:my-[1rem] lg:gap-4 xl:grid-cols-3 xl:mx-[3%] xl:my-[1rem] xl:gap-4">
      {Data.map((item) => (
        <div className={`border ${darkMode ? 'border-[#FFD369]' : 'border-[#0f172a] '}  rounded-[8px] w-full p-3`}>
          <LazyLoadImage effect="blur" className="w-full h-full rounded-[8px]" src={item.image} />
          <div>
            <p className={`${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a] '}  pt-[7px] text-[24px] font-bold`}>{item.name}</p>
            <p className={`${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a] '} py-[7px] text-[16px]`}>
              {showMore[item.id] || item.describe.length <= 100 ? item.describe : `${item.describe.slice(0, 100)}...`}{' '}
              {item.describe.length > 100 && (
                <span onClick={() => toggleShowMore(item.id)} className="font-bold cursor-pointer pt-2">
                  {showMore[item.id] ? 'Show Less' : 'Show More'}
                </span>
              )}
            </p>
            <div className={`${darkMode ? 'text-[#FFD369]' : 'text-[#0f172a] '}  pt-[7px] text-[20px] font-bold`}>
              <p className="mb-2 text-[22px]">Tools</p>
              <div className="flex items-center justify-between">
                {item.skills &&
                  item.skills.map((itemx) => (
                    <div className="flex items-center space-x-3">
                      <LazyLoadImage effect="blur" alt="Golang" className="xxl:w-[1.5vw] xs:w-[6.5vw] sm:w-[4.5vw] md:w-[3.5vw] lg:w-[3.5vw] xl:w-[2.5vw] h-full rounded-[8px]" src={itemx.skills1} />
                      <LazyLoadImage effect="blur" alt="Golang" className="xxl:w-[2.6vw] xs:w-[6.5vw] sm:w-[4.5vw] md:w-[3.5vw] lg:w-[3.5vw] xl:w-[2.5vw] h-full rounded-[8px]" src={itemx.skills2} />
                      <LazyLoadImage effect="blur" alt="Golang" className="xxl:w-[2vw]  xs:w-[6.5vw] sm:w-[4.5vw] md:w-[3.5vw] lg:w-[3.5vw] xl:w-[2.5vw] h-full rounded-[8px]" src={itemx.skills3} />
                      <LazyLoadImage effect="blur" alt="Golang" className="xxl:w-[2vw]  xs:w-[6.5vw] sm:w-[4.5vw] md:w-[3.5vw] lg:w-[3.5vw] xl:w-[2.5vw] h-full rounded-[8px]" src={itemx.skills4} />
                    </div>
                  ))}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:font-bold font-normal text-[16px]">
                  View Website
                </a>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
