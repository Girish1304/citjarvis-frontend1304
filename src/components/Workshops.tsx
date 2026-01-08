import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Factory, Code, Car, Bot, BarChart3, ChevronDown, Users, Clock, Wrench, IndianRupee } from "lucide-react";
import { Link } from "react-router-dom";

// Import workshop images
import iotImg from "@/assets/workshops/iot.png";
import industrialAutomationImg from "@/assets/workshops/industrial-automation.png";
import ros2Img from "@/assets/workshops/ros2.png";
import bajaImg from "@/assets/workshops/baja.png";
import kukaImg from "@/assets/workshops/kuka.png";
import sapImg from "@/assets/workshops/sap.png";

const workshops = [
  {
    id: 1,
    name: "INTERNET OF THINGS",
    icon: Cpu,
    description: "Learn to build smart connected devices using sensors, microcontrollers, and cloud platforms.",
    image: iotImg,
    duration: "1 - 1.5 hrs",
    capacity: "30 participants",
    price: "₹150",
    topics: [
      "Introduction to IoT architecture",
      "Sensor integration and data collection",
      "ESP32/Arduino programming basics",
      "Cloud connectivity (AWS IoT/ThingSpeak)",
      "Building a complete IoT project",
      "Real-world industrial applications",
    ],
  },
  {
    id: 2,
    name: "INDUSTRIAL AUTOMATION",
    icon: Factory,
    description: "Explore PLC programming, SCADA systems, and modern automation technologies.",
    image: industrialAutomationImg,
    duration: "1 - 1.5 hrs",
    capacity: "25 participants",
    price: "₹150",
    topics: [
      "Introduction to industrial automation",
      "PLC basics and ladder logic programming",
      "Sensors and actuators in automation",
      "SCADA system fundamentals",
      "HMI design principles",
      "Industry 4.0 concepts",
    ],
  },
  {
    id: 3,
    name: "ROS2 WORKSHOP",
    icon: Code,
    description: "Master Robot Operating System 2 for building advanced autonomous robots.",
    image: ros2Img,
    duration: "1 - 1.5 hrs",
    capacity: "20 participants",
    price: "₹150",
    topics: [
      "ROS2 architecture and concepts",
      "Setting up ROS2 environment",
      "Nodes, topics, and services",
      "Robot simulation with Gazebo",
      "Navigation and path planning",
      "Building autonomous robot behaviors",
    ],
  },
  {
    id: 4,
    name: "VEHICLE BUILDING - BAJA",
    icon: Car,
    description: "Design and build all-terrain vehicles. Learn vehicle dynamics and fabrication.",
    image: bajaImg,
    duration: "1 - 1.5 hrs",
    capacity: "35 participants",
    price: "₹150",
    topics: [
      "Introduction to BAJA SAE competition",
      "Vehicle design fundamentals",
      "Chassis and suspension design",
      "Powertrain selection and setup",
      "Fabrication techniques",
      "Testing and validation methods",
    ],
  },
  {
    id: 5,
    name: "KUKA ROBOTICS",
    icon: Bot,
    description: "Hands-on experience with KUKA industrial robots and programming.",
    image: kukaImg,
    duration: "1 - 1.5 hrs",
    capacity: "20 participants",
    price: "₹150",
    topics: [
      "Introduction to industrial robotics",
      "KUKA robot specifications and capabilities",
      "KRL programming basics",
      "Robot path planning and motion",
      "Pick and place operations",
      "Safety protocols and best practices",
    ],
  },
  {
    id: 6,
    name: "SAP WORKSHOP",
    icon: BarChart3,
    description: "Introduction to SAP ERP systems and business process management.",
    image: sapImg,
    duration: "1 - 1.5 hrs",
    capacity: "40 participants",
    price: "₹150",
    topics: [
      "Introduction to ERP systems",
      "SAP modules overview",
      "SAP S/4HANA fundamentals",
      "Business process integration",
      "Reporting and analytics",
      "Career opportunities in SAP",
    ],
  },
];

const Workshops = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="workshops" className="py-32 relative overflow-hidden bg-background">
      {/* Premium grid background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
            backgroundSize: '80px 100%',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center top, hsl(var(--primary) / 0.06) 0%, transparent 60%)",
          }}
        />
      </div>
      
      <div className="container px-6 relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span 
            className="inline-block text-primary font-mono text-sm uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            [ HANDS-ON TRAINING ]
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">MASTER THE</span>
            <br />
            <span className="text-gradient">FUTURE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6 intensive workshops designed to give you practical skills with industry-standard tools and technologies.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group relative"
            >
              <div className="relative bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden h-full">
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Workshop Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <img 
                    src={workshop.image} 
                    alt={workshop.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                  
                  {/* Workshop number badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold font-mono">
                    W{String(workshop.id).padStart(2, '0')}
                  </div>
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm border border-primary/30 text-primary text-sm font-bold font-mono">
                    {workshop.price}
                  </div>
                </div>

                {/* Workshop Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 border border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300">
                      <workshop.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-bold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                      {workshop.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {workshop.description}
                  </p>
                  
                  {/* Workshop meta info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary/70" />
                      <span className="font-mono">{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="w-3.5 h-3.5 text-primary/70" />
                      <span className="font-mono">{workshop.capacity}</span>
                    </div>
                  </div>

                  {/* Topics Toggle */}
                  <button
                    onClick={() => toggleExpand(workshop.id)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 w-full"
                  >
                    <span className="font-mono uppercase tracking-wider text-xs">
                      {expandedId === workshop.id ? "Hide Topics" : "View Topics"}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === workshop.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  {/* Expandable Topics Section */}
                  <AnimatePresence>
                    {expandedId === workshop.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 border-t border-border pt-4 mb-4">
                          <ul className="space-y-2">
                            {workshop.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.05 }}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0" />
                                <span>{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Registration Button */}
                  <Link to="/register" className="block">
                    <button className="w-full py-3 bg-transparent border border-primary/50 text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;