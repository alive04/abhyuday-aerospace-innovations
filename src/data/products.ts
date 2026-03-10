import fpv7Img from "@/assets/products/fpv-7.jpg";
import fpv10Img from "@/assets/products/fpv-10.jpg";
import shiva1Img from "@/assets/products/shiva-1.jpg";
import shiva5Img from "@/assets/products/shiva-5.jpg";
import shiva20Img from "@/assets/products/shiva-20.jpg";
import sudarshanImg from "@/assets/products/sudarshan.jpg";

import fpv7HeroImg from "@/assets/products/fpv-7-hero.jpg";
import shivaHeroImg from "@/assets/products/shiva-hero.jpg";
import sudarshanHeroImg from "@/assets/products/sudarshan-hero.jpg";

export interface ProductSpec {
  label: string;
  value: string;
  prefix?: string;
}

export interface ProductPayload {
  name: string;
  details: string[];
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductUseCase {
  title: string;
}

export interface ProductData {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  cardImage: string;
  specs: ProductSpec[];
  payloads: ProductPayload[];
  useCases: ProductUseCase[];
  features: ProductFeature[];
}

export const products: ProductData[] = [
  // FPV
  {
    slug: "fpv-7",
    name: "FPV 7",
    category: "FPV",
    tagline: "Tactical Reconnaissance Drone",
    description:
      "FPV 7 is a high-speed first-person-view drone designed for tactical reconnaissance missions. Its compact frame and agile maneuvering capabilities enable operators to navigate complex environments with real-time video feedback.",
    heroImage: fpv7HeroImg,
    cardImage: fpv7Img,
    specs: [
      { label: "Max Speed", value: "120 km/h", prefix: "Up to" },
      { label: "Range", value: "7 km", prefix: "Up to" },
      { label: "Flight Time", value: "25 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "1.2 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "HD Camera", details: ["1080p FPV Feed", "Low Latency < 30ms"] },
      { name: "Night Vision", details: ["IR Camera Module", "200m Detection Range"] },
    ],
    useCases: [
      { title: "Urban Reconnaissance" },
      { title: "Building Clearance" },
      { title: "Perimeter Security" },
      { title: "Search & Rescue" },
    ],
    features: [
      { title: "Compact & Man-Portable", description: "Fits in a standard tactical backpack with less than 2 minutes setup time." },
      { title: "Low Latency FPV", description: "Sub-30ms video feed ensures real-time situational awareness in dynamic environments." },
      { title: "GPS-Denied Navigation", description: "Onboard IMU and optical flow sensors enable operation in GPS-denied environments." },
      { title: "Return-to-Home", description: "Automatic RTH on signal loss ensures asset recovery in all conditions." },
    ],
  },
  {
    slug: "fpv-10",
    name: "FPV 10",
    category: "FPV",
    tagline: "Extended Range FPV Platform",
    description:
      "FPV 10 extends the operational envelope with a 10 km range and enhanced payload capacity. Purpose-built for deep reconnaissance and forward observation missions.",
    heroImage: fpv7HeroImg,
    cardImage: fpv10Img,
    specs: [
      { label: "Max Speed", value: "140 km/h", prefix: "Up to" },
      { label: "Range", value: "10 km", prefix: "Up to" },
      { label: "Flight Time", value: "30 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "1.8 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "EO/IR Camera", details: ["Dual Sensor Gimbal", "4K Daylight + Thermal"] },
      { name: "Target Designator", details: ["Laser Pointer Module", "500m Effective Range"] },
    ],
    useCases: [
      { title: "Forward Observation" },
      { title: "Artillery Spotting" },
      { title: "Convoy Escort" },
      { title: "Border Surveillance" },
    ],
    features: [
      { title: "Extended 10km Range", description: "Operates well beyond visual line of sight for deep reconnaissance missions." },
      { title: "Dual Payload Bay", description: "Supports simultaneous EO and IR payloads for comprehensive target identification." },
      { title: "Encrypted Link", description: "AES-256 encrypted data link prevents interception and jamming." },
      { title: "Quick Deploy", description: "Field-ready in under 90 seconds from backpack to airborne." },
    ],
  },
  // Kamikaze
  {
    slug: "shiva-1",
    name: "Shiva 1",
    category: "Kamikaze",
    tagline: "Precision Loitering Munition",
    description:
      "Shiva 1 is a lightweight loitering munition designed for precision strike operations against high-value targets. Its electric propulsion ensures near-silent approach.",
    heroImage: shivaHeroImg,
    cardImage: shiva1Img,
    specs: [
      { label: "Loiter Time", value: "20 min", prefix: "Up to" },
      { label: "Range", value: "5 km", prefix: "Up to" },
      { label: "Warhead", value: "500 g", prefix: "Up to" },
      { label: "Launch Weight", value: "2.5 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "EFP Warhead", details: ["Explosively Formed Penetrator", "Armored Target Capability"] },
      { name: "FPV Guidance", details: ["Terminal FPV Lock-on", "Manual Override Option"] },
    ],
    useCases: [
      { title: "Anti-Personnel" },
      { title: "Light Vehicle Strikes" },
      { title: "Ambush Operations" },
      { title: "Force Multiplication" },
    ],
    features: [
      { title: "Silent Approach", description: "Electric motor ensures near-silent terminal approach for maximum surprise." },
      { title: "Tube Launch", description: "Man-portable tube launcher enables rapid deployment from concealed positions." },
      { title: "Abort & Reuse", description: "Mission abort capability allows recovery and reuse when targets change." },
      { title: "Swarm Compatible", description: "Designed for coordinated multi-unit deployment against area targets." },
    ],
  },
  {
    slug: "shiva-1-vtx-vrx",
    name: "Shiva 1 (VTX VRX)",
    category: "Kamikaze",
    tagline: "Enhanced Video Loitering Munition",
    description:
      "Shiva 1 VTX VRX variant adds dedicated video transmitter and receiver modules for enhanced terminal guidance and battle damage assessment.",
    heroImage: shivaHeroImg,
    cardImage: shiva1Img,
    specs: [
      { label: "Loiter Time", value: "18 min", prefix: "Up to" },
      { label: "Video Range", value: "7 km", prefix: "Up to" },
      { label: "Warhead", value: "500 g", prefix: "Up to" },
      { label: "Launch Weight", value: "2.8 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "HD Video TX", details: ["Long Range Video Link", "Real-time BDA Feed"] },
      { name: "EFP Warhead", details: ["Shaped Charge", "Anti-Material Capability"] },
    ],
    useCases: [
      { title: "Precision Strike" },
      { title: "Battle Damage Assessment" },
      { title: "Target Verification" },
      { title: "ISTAR Missions" },
    ],
    features: [
      { title: "Dedicated VTX/VRX", description: "Separate video transmitter and receiver for uninterrupted guidance feed." },
      { title: "Extended Video Range", description: "7km video link ensures operator control throughout the engagement." },
      { title: "BDA Capability", description: "Real-time battle damage assessment through terminal video feed." },
      { title: "Modular Warhead", description: "Interchangeable warhead configurations for mission flexibility." },
    ],
  },
  {
    slug: "shiva-5-electric",
    name: "Shiva 5 (Electric)",
    category: "Kamikaze",
    tagline: "Medium Range Strike Platform",
    description:
      "Shiva 5 Electric delivers a 5 kg class loitering munition capability with extended loiter time and heavier warhead for medium-range precision strikes.",
    heroImage: shivaHeroImg,
    cardImage: shiva5Img,
    specs: [
      { label: "Loiter Time", value: "35 min", prefix: "Up to" },
      { label: "Range", value: "15 km", prefix: "Up to" },
      { label: "Warhead", value: "2 kg", prefix: "Up to" },
      { label: "Launch Weight", value: "8 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "HEAT Warhead", details: ["High-Explosive Anti-Tank", "ERA Defeat Capability"] },
      { name: "EO/IR Seeker", details: ["Dual-Mode Seeker", "Auto-Track Target Lock"] },
    ],
    useCases: [
      { title: "Armored Targets" },
      { title: "Fortified Positions" },
      { title: "Supply Line Interdiction" },
      { title: "Counter-Battery" },
    ],
    features: [
      { title: "2kg Warhead", description: "Heavier warhead class enables engagement of armored and fortified targets." },
      { title: "All-Electric", description: "Zero thermal signature during loiter phase for enhanced survivability." },
      { title: "Autonomous Tracking", description: "AI-powered target tracking maintains lock through evasive maneuvers." },
      { title: "Salvo Launch", description: "Multiple units can be launched in rapid succession for saturation attacks." },
    ],
  },
  {
    slug: "shiva-5-vtx-vrx",
    name: "Shiva 5 (VTX VRX & Long Telemetry)",
    category: "Kamikaze",
    tagline: "Extended Range Strike with Video",
    description:
      "Shiva 5 VTX VRX variant combines long-range telemetry with dedicated video links for beyond-visual-range precision engagement.",
    heroImage: shivaHeroImg,
    cardImage: shiva5Img,
    specs: [
      { label: "Loiter Time", value: "30 min", prefix: "Up to" },
      { label: "Telemetry Range", value: "25 km", prefix: "Up to" },
      { label: "Warhead", value: "2 kg", prefix: "Up to" },
      { label: "Launch Weight", value: "8.5 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "Long Range Video", details: ["25km Video Downlink", "Encrypted HD Feed"] },
      { name: "Multi-Effect Warhead", details: ["Configurable Blast Pattern", "Fragmentation + EFP"] },
    ],
    useCases: [
      { title: "BVLOS Strike" },
      { title: "Deep Interdiction" },
      { title: "HVT Elimination" },
      { title: "Network-Centric Ops" },
    ],
    features: [
      { title: "25km Telemetry", description: "Long-range encrypted telemetry for beyond-visual-range operations." },
      { title: "HD Video Link", description: "Dedicated video channel ensures real-time operator situational awareness." },
      { title: "Multi-Effect Warhead", description: "Configurable warhead allows fragmentation or penetration modes." },
      { title: "Mission Planning", description: "Pre-programmed waypoint navigation with manual override capability." },
    ],
  },
  {
    slug: "shiva-5-ic",
    name: "Shiva 5 (IC Engine)",
    category: "Kamikaze",
    tagline: "Long Endurance IC Strike Platform",
    description:
      "Shiva 5 IC Engine variant delivers dramatically extended loiter time through internal combustion propulsion for persistent area denial missions.",
    heroImage: shivaHeroImg,
    cardImage: shiva5Img,
    specs: [
      { label: "Loiter Time", value: "90 min", prefix: "Up to" },
      { label: "Range", value: "40 km", prefix: "Up to" },
      { label: "Warhead", value: "2 kg", prefix: "Up to" },
      { label: "Launch Weight", value: "12 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "HEAT Warhead", details: ["Anti-Armor Penetrator", "Top-Attack Profile"] },
      { name: "ISR Package", details: ["Persistent Surveillance", "Target ID + Strike"] },
    ],
    useCases: [
      { title: "Area Denial" },
      { title: "Persistent Overwatch" },
      { title: "Convoy Ambush" },
      { title: "Strategic Strike" },
    ],
    features: [
      { title: "90min Loiter", description: "IC engine provides 3x the endurance of electric variants for persistent missions." },
      { title: "40km Range", description: "Deep penetration capability for strategic target engagement." },
      { title: "Top-Attack Mode", description: "Terminal dive profile defeats reactive and composite armor." },
      { title: "Fuel Injection", description: "Electronic fuel injection ensures reliable start in extreme conditions." },
    ],
  },
  {
    slug: "shiva-20-ic",
    name: "Shiva 20 (IC Engine)",
    category: "Kamikaze",
    tagline: "Heavy Strike Loitering Munition",
    description:
      "Shiva 20 is the heavy-class loitering munition with a 20 kg warhead payload, designed for destruction of hardened targets and heavy armor.",
    heroImage: shivaHeroImg,
    cardImage: shiva20Img,
    specs: [
      { label: "Loiter Time", value: "120 min", prefix: "Up to" },
      { label: "Range", value: "80 km", prefix: "Up to" },
      { label: "Warhead", value: "8 kg", prefix: "Up to" },
      { label: "Launch Weight", value: "35 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "Tandem HEAT", details: ["Tandem Shaped Charge", "ERA + Main Armor Defeat"] },
      { name: "Multi-Spectral Seeker", details: ["EO + IR + mmWave", "All-Weather Capability"] },
    ],
    useCases: [
      { title: "Heavy Armor" },
      { title: "Bunker Busting" },
      { title: "Command Posts" },
      { title: "Strategic Assets" },
    ],
    features: [
      { title: "8kg Warhead", description: "Heavy warhead class capable of defeating main battle tanks and hardened positions." },
      { title: "80km Range", description: "Strategic range enables engagement of deep rear-area targets." },
      { title: "Multi-Spectral Seeker", description: "All-weather target acquisition through combined EO/IR/mmWave sensors." },
      { title: "Vehicle Launch", description: "Launched from ground vehicles for rapid tactical deployment." },
    ],
  },
  {
    slug: "shiva-20-ic-vtx",
    name: "Shiva 20 (IC Engine with VTX VRX & Long Telemetry)",
    category: "Kamikaze",
    tagline: "Heavy Strike with Full Telemetry",
    description:
      "Shiva 20 VTX variant adds comprehensive video and telemetry systems for operator-in-the-loop engagement at maximum range.",
    heroImage: shivaHeroImg,
    cardImage: shiva20Img,
    specs: [
      { label: "Loiter Time", value: "110 min", prefix: "Up to" },
      { label: "Telemetry Range", value: "100 km", prefix: "Up to" },
      { label: "Warhead", value: "8 kg", prefix: "Up to" },
      { label: "Launch Weight", value: "38 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "Tandem HEAT", details: ["Dual Stage Penetrator", "Active Protection Defeat"] },
      { name: "Full Motion Video", details: ["100km HD Downlink", "Real-time Operator Control"] },
    ],
    useCases: [
      { title: "BVLOS Heavy Strike" },
      { title: "Operator-in-Loop" },
      { title: "Strategic Targets" },
      { title: "Joint Operations" },
    ],
    features: [
      { title: "100km Video Link", description: "Full motion video at strategic distances for complete operator control." },
      { title: "Operator-in-Loop", description: "Human decision-making maintained throughout the engagement sequence." },
      { title: "Joint Ops Ready", description: "Interoperable data links for integration with theater command networks." },
      { title: "Precision Terminal", description: "Sub-meter terminal accuracy through combined GPS/INS/vision guidance." },
    ],
  },
  // Surveillance
  {
    slug: "sudarshan-ac",
    name: "Sudarshan AC",
    category: "Surveillance & Dropping",
    tagline: "Multi-Mission Surveillance Platform",
    description:
      "Sudarshan AC is the baseline multi-mission surveillance drone designed for aerial reconnaissance, payload delivery, and persistent area monitoring.",
    heroImage: sudarshanHeroImg,
    cardImage: sudarshanImg,
    specs: [
      { label: "VLOS", value: "2 km", prefix: "Up to" },
      { label: "Radio Range", value: "15 km", prefix: "Up to" },
      { label: "Flight Time", value: "45 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "6.5 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "Daylight Camera", details: ["30X Optical Zoom", "4K Ultra HD"] },
      { name: "Thermal Camera", details: ["640×512 Resolution", "4X Digital Zoom", "500m Detection Range"] },
    ],
    useCases: [
      { title: "Border Patrol" },
      { title: "Disaster Response" },
      { title: "Infrastructure Inspection" },
      { title: "Supply Dropping" },
    ],
    features: [
      { title: "Quick Deploy", description: "Man-portable design with under 3 minutes from backpack to airborne." },
      { title: "Dual Payload Bay", description: "Supports simultaneous surveillance and delivery payloads." },
      { title: "All-Weather Ops", description: "IP54 rated for operation in rain, dust, and high winds up to 35 km/h." },
      { title: "Auto Mission", description: "Fully autonomous waypoint navigation with geo-fencing and RTH." },
    ],
  },
  {
    slug: "sudarshan-ac-range-plus",
    name: "Sudarshan AC Range+",
    category: "Surveillance & Dropping",
    tagline: "Extended Range Surveillance",
    description:
      "Sudarshan AC Range+ extends the operational radius with enhanced radio systems and optimized power management for long-range ISR missions.",
    heroImage: sudarshanHeroImg,
    cardImage: sudarshanImg,
    specs: [
      { label: "VLOS", value: "2 km", prefix: "Up to" },
      { label: "Radio Range", value: "25 km", prefix: "Up to" },
      { label: "Flight Time", value: "50 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "7.0 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "EO/IR Gimbal", details: ["30X Zoom + Thermal", "Stabilized 3-Axis"] },
      { name: "Long Range Radio", details: ["25km Data Link", "AES-256 Encrypted"] },
    ],
    useCases: [
      { title: "Wide Area Surveillance" },
      { title: "Pipeline Monitoring" },
      { title: "Maritime Patrol" },
      { title: "Forest Fire Detection" },
    ],
    features: [
      { title: "25km Radio Range", description: "Extended communication range for deep-area surveillance operations." },
      { title: "50min Endurance", description: "Optimized power management extends mission duration significantly." },
      { title: "Encrypted Link", description: "Military-grade AES-256 encryption on all data channels." },
      { title: "Relay Mode", description: "Supports mesh relay for extending range beyond single-hop limits." },
    ],
  },
  {
    slug: "sudarshan-ac-payload-plus",
    name: "Sudarshan AC Payload+",
    category: "Surveillance & Dropping",
    tagline: "Heavy Payload Delivery Drone",
    description:
      "Sudarshan AC Payload+ is optimized for maximum payload capacity, enabling delivery of supplies, medical kits, and munitions to forward positions.",
    heroImage: sudarshanHeroImg,
    cardImage: sudarshanImg,
    specs: [
      { label: "Max Payload", value: "3 kg", prefix: "Up to" },
      { label: "Radio Range", value: "15 km", prefix: "Up to" },
      { label: "Flight Time", value: "35 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "9.5 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "Delivery Module", details: ["3kg Payload Capacity", "Precision Drop Mechanism"] },
      { name: "Surveillance Camera", details: ["1080p Live Feed", "Target Marking"] },
    ],
    useCases: [
      { title: "Supply Delivery" },
      { title: "Medical Evacuation" },
      { title: "Munition Drop" },
      { title: "Emergency Response" },
    ],
    features: [
      { title: "3kg Payload", description: "Generous payload capacity for supply and munition delivery missions." },
      { title: "Precision Drop", description: "GPS-guided release mechanism ensures accurate payload delivery." },
      { title: "Multi-Drop", description: "Configurable for single or sequential multi-point delivery missions." },
      { title: "Hover & Drop", description: "Stable hover capability for precision vertical payload placement." },
    ],
  },
  {
    slug: "sudarshan-alt-plus",
    name: "Sudarshan Alt+",
    category: "Surveillance & Dropping",
    tagline: "High Altitude Surveillance Platform",
    description:
      "Sudarshan Alt+ is designed for high-altitude operations, delivering surveillance capabilities in mountainous and high-elevation terrain.",
    heroImage: sudarshanHeroImg,
    cardImage: sudarshanImg,
    specs: [
      { label: "Max Altitude", value: "5500 m", prefix: "Up to" },
      { label: "Radio Range", value: "20 km", prefix: "Up to" },
      { label: "Flight Time", value: "40 min", prefix: "Up to" },
      { label: "Take-off Weight", value: "7.5 kg", prefix: "Up to" },
    ],
    payloads: [
      { name: "High-Alt EO/IR", details: ["Pressure-Compensated Gimbal", "30X Zoom + Thermal"] },
      { name: "Atmospheric Sensors", details: ["Wind Speed & Direction", "Barometric Data"] },
    ],
    useCases: [
      { title: "Mountain Surveillance" },
      { title: "High Altitude Recon" },
      { title: "Glacier Monitoring" },
      { title: "Search & Rescue" },
    ],
    features: [
      { title: "5500m Ceiling", description: "High-altitude optimized motors and props for operation above 5000m ASL." },
      { title: "Cold Weather Ops", description: "Battery heating and cold-start systems for -20°C operation." },
      { title: "High Wind Tolerance", description: "Stable flight in winds up to 45 km/h at altitude." },
      { title: "Terrain Following", description: "LIDAR-assisted terrain following for safe nap-of-the-earth flight." },
    ],
  },
];

export const getProductBySlug = (slug: string): ProductData | undefined =>
  products.find((p) => p.slug === slug);
