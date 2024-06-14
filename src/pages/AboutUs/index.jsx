import Layout from "../../components/Layout";
import saya from "/image/saya.jpg";

const AboutUsPage = () => {
  return (
    <Layout>
      <section className="h-screen container relative bg-black opacity-90 flex justify-center items-center mx-auto">
        <div className="absolute top-[-145px] left-[-134px] z-0 w-[174px] h-[175px] border-[3px] rounded-full border-white"></div>
        <div className="absolute top-[-160px] left-[-150px] z-0 w-52 h-52 border-[3px] rounded-full border-white"></div>
        <div className="absolute top-[-175px] left-[-165px] z-0 w-[240px] h-[240px] border-[3px] rounded-full border-white"></div>
        <div className="absolute top-[-190px] left-[-180px] z-0 w-[272px] h-[272px] border-[3px] rounded-full border-white"></div>
        <div className="absolute top-[-205px] left-[-195px] z-0 w-[304px] h-[304px] border-[3px] rounded-full border-white"></div>
        <div className="absolute top-[-220px] left-[-210px] z-02w-[336px] h-[336px] border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-145px] left-[-134px] z-0 w-[174px] h-[175px] border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-160px] left-[-150px] z-0 w-52 h-52 border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-175px] left-[-165px] z-0 w-[240px] h-[240px] border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-190px] left-[-180px] z-0 w-[272px] h-[272px] border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-205px] left-[-195px] z-0 w-[304px] h-[304px] border-[3px] rounded-full border-white"></div>
        <div className="absolute bottom-[-220px] left-[-210px] z-02w-[336px] h-[336px] border-[3px] rounded-full border-white"></div>
        <div className="px-24 items-center text-lg flex flex-col md:grid grid-cols-12 gap-24">
          <div className="col-span-2 relative">
            <img
              src={saya}
              alt="Saya"
              className="w-full h-full object-contain min-w-72 min-h-72 rounded-md"
            />
            <div className="w-full h-full bg-black opacity-20 min-w-72 min-h-72 absolute top-0 left-0 rounded-md"></div>
          </div>
          <div className="col-span-10 sm:text-base text-sm text-justify md:text-start text-white max-w-4xl px-36">
            <h2 className="text-7xl font-bold tracking-tight text-white sm:text-6xl pb-5">
              About Us
            </h2>
            <h3 className="text-2xl font-bold">
              DLH <span className="text-red-600">Surakarta</span>
            </h3>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUsPage;
