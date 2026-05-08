import Navbar from "@/components/Navbar";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";
import donation from "@/assets/donation.jpg";

const Donation = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <img
          src={donation}
          alt="Children with disabilities learning and playing together"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Donation;
