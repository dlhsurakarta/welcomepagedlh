import { Link } from "react-router-dom";

const EducationSection = () => {
  const DATA = [
    {
      title: "Sekretariat",
      name: "Administrasi Umum, Perencanaan dan Penganggaran, Kepegawaian dan Organisasi",
      Linkurl: "https://drive.google.com/drive/folders/1q9MtglQkr5jZwVub9okkK4LT2Y3HxfEB?usp=sharing"
    },
    {
      title: "Bidang TAKELING",
      name: "Pembinaan dan Pengawasan Lingkungan Hidup, Perencanaan Lingkungan",
      Linkurl: "https://drive.google.com/drive/folders/1jCOoAxGozKrCkZeXeQ6UvkGXO1XoeRnS?usp=sharing"
    },
    {
      title: "Bidang P3L",
      name: "Pengelolaan Keanekaragaman Hayati, Pengendalian Pencemaran Lingkungan Hidup, Penataan dan Peningkatan Kapasitas Lingkungan.",
      Linkurl: "https://drive.google.com/drive/folders/1NTFREPRFUEpeSb3Dw52h7w_9T9lzcnGD?usp=sharing"
    },
    {
      title: "Bidang PSLB3",
      name: "Pengelolaan Sampah dan Limbah B3",
      Linkurl: "https://drive.google.com/drive/folders/1kBY7IY1wIFnW6_c3jJG3pHaOWYK3gbLh?usp=sharing"
    },
  ];

  return (
    <section
      id="education-section"
      className="mx-auto border-b- md:py-20 py-10 pb-24 bg-slate-700"
    >
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl px-5 mb-4">
         UPLOAD DATA
        </h2>
        <div className="mt-15  gap-x-5 gap-y-15 ">
          <div className="lg:w-full lg:max-w-3xl lg:flex-auto px-5">
            <p className="text-xl leading-8 text-gray-200">
            Upload semua data untuk mempermudah dalam mengakses, mengubah, dan menyimpan semua data 
            yang berkaitan dengan DLH Kota SUrakarta
            <p>
            Apabila ada data yang ingin diproses, silahkan pilih kategori data tersebut dibawah ini.
            </p>
            </p>
          </div>
          <div className="mt-8 py-4 px-5 bg-slate-600">
            <div className="flex flex-col gap-8 bg-black -center gap-2">
              {DATA.map((item, index) => (
                <div key={index} className="">
                  <h2 className="text-4xl font-semibold tracking-tight text-white">
                    <Link target="_blank" to={item.Linkurl}>{item.title}</Link>
                  </h2>
                  <p className="text-base leading-7 text-gray-400">
                    {item.name}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
