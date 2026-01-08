import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Workshops from "@/components/Workshops";
import Footer from "@/components/Footer";
import ScanLineOverlay from "@/components/ScanLineOverlay";
import KikkBackground from "@/components/KikkBackground";

const WorkshopsPage = () => {
  return (
    <>
      <Helmet>
        <title>Workshops | JARVIS 2026</title>
        <meta 
          name="description" 
          content="Join hands-on workshops at JARVIS 2026 - IoT, Industrial Automation, ROS2, BAJA Vehicle Building, KUKA Robotics, and SAP." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background relative">
        <KikkBackground />
        <ScanLineOverlay />
        <Navbar />
        <main className="pt-24 relative z-10">
          <Workshops />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default WorkshopsPage;
