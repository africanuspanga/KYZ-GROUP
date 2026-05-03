export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  clients: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "sanitation",
    title: "Sanitation & Hygiene",
    shortDesc: "Complete sanitation solutions for healthcare, institutions, and public facilities.",
    description:
      "We provide comprehensive sanitation and hygiene solutions including cleaning chemicals, disinfectants, hand hygiene products, and waste management systems. Our products meet international health standards and are trusted by hospitals, schools, and government institutions across East Africa.",
    features: [
      "Hospital-grade disinfectants",
      "Hand sanitizers and soaps",
      "Cleaning equipment and tools",
      "Hygiene stations and dispensers",
      "Water treatment solutions",
    ],
    clients: ["Hospitals", "Schools", "Government Institutions", "Hotels", "Factories"],
    icon: "Droplets",
  },
  {
    slug: "safety",
    title: "Safety & PPE",
    shortDesc: "Personal protective equipment and safety gear for industrial and institutional use.",
    description:
      "Our safety division supplies high-quality personal protective equipment (PPE) including helmets, gloves, safety boots, high-visibility clothing, respiratory protection, and fall arrest systems. We ensure workers across all industries are protected with certified safety gear.",
    features: [
      "Safety helmets and hard hats",
      "Protective gloves and clothing",
      "Safety footwear",
      "Eye and face protection",
      "Respiratory protection",
      "Fall protection systems",
    ],
    clients: ["Construction", "Manufacturing", "Oil & Gas", "Mining", "Agriculture"],
    icon: "Shield",
  },
  {
    slug: "security",
    title: "Security & Tactical",
    shortDesc: "Professional security equipment and tactical gear for agencies and organizations.",
    description:
      "We supply professional security and tactical equipment to private security firms, government agencies, and corporate security departments. Our range includes surveillance systems, communication devices, tactical gear, and crowd control equipment.",
    features: [
      "Surveillance cameras and systems",
      "Two-way radios",
      "Tactical vests and gear",
      "Crowd control barriers",
      "Metal detectors",
      "Access control systems",
    ],
    clients: ["Security Agencies", "Banks", "Government", "Embassies", "Corporate Offices"],
    icon: "Lock",
  },
  {
    slug: "medical",
    title: "Medical Equipment",
    shortDesc: "Quality medical supplies, devices, and hospital equipment for healthcare providers.",
    description:
      "Our medical division supplies hospitals, clinics, and pharmacies with essential medical equipment, diagnostic tools, surgical supplies, and patient care products. We partner with leading manufacturers to bring world-class healthcare solutions to East Africa.",
    features: [
      "Diagnostic equipment",
      "Surgical instruments",
      "Patient monitoring systems",
      "Hospital furniture",
      "First aid kits",
      "Laboratory supplies",
    ],
    clients: ["Hospitals", "Clinics", "Pharmacies", "NGOs", "Government Health Programs"],
    icon: "HeartPulse",
  },
  {
    slug: "supply",
    title: "Supply Chain & Logistics",
    shortDesc: "End-to-end procurement, warehousing, and distribution services.",
    description:
      "We offer comprehensive supply chain and logistics solutions including procurement, warehousing, inventory management, and distribution. Our network ensures timely delivery of products across East Africa with full traceability and quality assurance.",
    features: [
      "Procurement services",
      "Warehousing and storage",
      "Inventory management",
      "Distribution and delivery",
      "Import/export handling",
      "Quality assurance",
    ],
    clients: ["Corporations", "Government", "NGOs", "Retailers", "Manufacturers"],
    icon: "Truck",
  },
  {
    slug: "waste-management",
    title: "Waste Management",
    shortDesc: "Integrated waste collection, disposal, and recycling solutions.",
    description:
      "Our waste management services cover collection, transportation, treatment, and disposal of medical, industrial, and municipal waste. We provide eco-friendly solutions that comply with environmental regulations and promote sustainability.",
    features: [
      "Medical waste disposal",
      "Industrial waste management",
      "Recycling programs",
      "Waste collection services",
      "Environmental compliance",
      "Hazardous material handling",
    ],
    clients: ["Hospitals", "Factories", "Municipalities", "Schools", "Hotels"],
    icon: "Recycle",
  },
  {
    slug: "uniforms",
    title: "Uniform Supply",
    shortDesc: "Custom uniform design, manufacturing, and bulk supply for organizations.",
    description:
      "We design, manufacture, and supply custom uniforms for security personnel, healthcare workers, industrial staff, and corporate teams. Our uniforms combine durability, comfort, and professional appearance with options for custom branding.",
    features: [
      "Security uniforms",
      "Medical scrubs and coats",
      "Industrial workwear",
      "Corporate attire",
      "School uniforms",
      "Custom embroidery and branding",
    ],
    clients: ["Security Firms", "Hospitals", "Schools", "Corporations", "Government"],
    icon: "Shirt",
  },
  {
    slug: "fumigation",
    title: "Fumigation",
    shortDesc: "Professional pest control and fumigation services for all sectors.",
    description:
      "Our fumigation and pest control services protect homes, businesses, and institutions from pests and disease vectors. We use approved chemicals and methods that are effective yet safe for humans and the environment.",
    features: [
      "Residential fumigation",
      "Commercial pest control",
      "Termite treatment",
      "Rodent control",
      "Mosquito control programs",
      "Post-construction treatment",
    ],
    clients: ["Homes", "Offices", "Warehouses", "Hotels", "Food Processing"],
    icon: "SprayCan",
  },
  {
    slug: "real-estate",
    title: "Real Estate & Rentals",
    shortDesc: "Commercial and residential property solutions across East Africa.",
    description:
      "Our real estate division offers property sales, rentals, and management services for commercial and residential clients. We help businesses find the right locations and provide end-to-end property management solutions.",
    features: [
      "Commercial property sales",
      "Residential rentals",
      "Property management",
      "Warehouse leasing",
      "Land acquisition",
      "Investment consulting",
    ],
    clients: ["Corporations", "Investors", "Individuals", "NGOs", "Government"],
    icon: "Building",
  },
];

export const clientCategories = [
  {
    title: "Hospitals",
    description: "Medical centers and healthcare facilities requiring equipment and sanitation.",
    icon: "HeartPulse",
  },
  {
    title: "Government & NGOs",
    description: "Public sector institutions and non-governmental organizations.",
    icon: "Landmark",
  },
  {
    title: "Security Agencies",
    description: "Private and public security organizations needing tactical gear.",
    icon: "ShieldCheck",
  },
  {
    title: "Schools",
    description: "Educational institutions requiring uniforms, sanitation, and safety supplies.",
    icon: "GraduationCap",
  },
  {
    title: "Corporate & Factories",
    description: "Businesses and manufacturing plants needing PPE and operational supplies.",
    icon: "Factory",
  },
  {
    title: "Public Institutions",
    description: "Municipal and public service organizations across East Africa.",
    icon: "Building2",
  },
];

export const whyChooseUs = [
  {
    number: "01",
    title: "Unmatched Product Quality",
    description:
      "We source only certified, industry-standard products from globally recognized manufacturers. Every item undergoes rigorous quality checks before reaching our clients.",
  },
  {
    number: "02",
    title: "East Africa Coverage",
    description:
      "With distribution networks spanning Tanzania, Kenya, Uganda, Rwanda, and Burundi, we deliver reliably across the entire East African region.",
  },
  {
    number: "03",
    title: "Rapid Response & Delivery",
    description:
      "Our logistics infrastructure enables us to fulfill orders and deliver within 24-48 hours for stocked items, minimizing downtime for your operations.",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description:
      "We don't just sell products — we design tailored supply solutions that match your organization's specific operational needs and budget.",
  },
  {
    number: "05",
    title: "Compliance & Certification",
    description:
      "All our products meet WHO, OSHA, and ISO standards. We maintain full regulatory compliance and provide documentation for audits.",
  },
  {
    number: "06",
    title: "Dedicated Account Support",
    description:
      "Every client receives a dedicated account manager who understands your industry and ensures seamless communication and service delivery.",
  },
];

export const leadership = [
  {
    name: "Elisha Ayoub",
    title: "Founder & CEO",
    bio: "Elisha Ayoub founded KYZ (T) GROUP LIMITED with a vision to transform supply and distribution across East Africa. With extensive experience in procurement and logistics, he has built the company into a trusted partner for organizations throughout the region.",
    imageLabel: "CEO Portrait",
  },
  {
    name: "President",
    title: "President",
    bio: "The President of KYZ (T) GROUP LIMITED oversees strategic operations and business development. Their leadership ensures the company continues to expand its reach while maintaining the highest standards of service excellence.",
    imageLabel: "President Portrait",
  },
  {
    name: "Policy Leader",
    title: "Head of Policy & Compliance",
    bio: "Our Head of Policy & Compliance ensures that all operations adhere to international standards and local regulations. They drive the company's certification efforts and quality assurance programs.",
    imageLabel: "Policy Leader Portrait",
  },
];

export const certifications = [
  {
    name: "WHO Compliance",
    description: "World Health Organization standards for medical and sanitation supplies.",
    label: "WHO",
  },
  {
    name: "OSHA Standards",
    description: "Occupational Safety and Health Administration compliance for safety equipment.",
    label: "OSHA",
  },
  {
    name: "ISO 9001:2015",
    description: "International quality management system certification.",
    label: "ISO",
  },
  {
    name: "Business Registration",
    description: "Fully registered and licensed to operate across East Africa.",
    label: "Registered",
  },
];
