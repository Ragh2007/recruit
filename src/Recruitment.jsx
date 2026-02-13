import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Recruitment.css";
import { useNavigate } from "react-router-dom";
// Ensure this path matches your project structure
import throne from "/Images/1770564850_pasted.png";

const domains = [
    // Tech Domains
    {
        id: "iot",
        name: "IOT",
        icon: "/Images/Logo/IoT&Embedded.png",
        category: "tech"
    },
    {
        id: "embedded-systems",
        name: "Embedded Systems",
        icon: "/Images/Logo/IoT&Embedded.png",
        category: "tech"
    },
    {
        id: "cloud-computing",
        name: "Cloud Computing",
        icon: "/Images/Logo/CloudComputing.png",
        category: "tech"
    },
    {
        id: "game-development",
        name: "Game Development",
        icon: "/Images/Logo/gamedev.png",
        category: "tech"
    },
    {
        id: "android-development",
        name: "Android Development",
        icon: "/Images/Logo/AppDevelopment.png",
        category: "tech"
    },
    {
        id: "web-development",
        name: "Web Development",
        icon: "/Images/Logo/WebDevelopment.png",
        category: "tech"
    },
    {
        id: "java",
        name: "Java",
        icon: "/Images/Logo/Java.png",
        category: "tech"
    },
    {
        id: "cyber-security",
        name: "Cyber Security",
        icon: "/Images/Logo/CyberSecurity.png",
        category: "tech"
    },
    {
        id: "ai-ml",
        name: "AI/ML",
        icon: "/Images/Logo/AIML.png",
        category: "tech"
    },
    {
        id: "data-analytics",
        name: "Data Analytics",
        icon: "/Images/Logo/DataAnalytics.png",
        category: "tech"
    },
    // Non-Tech Domains - Marketing Subcategory
    {
        id: "marketing",
        name: "Marketing",
        icon: "/Images/Logo/Marketing.png",
        category: "non-tech",
        subcategory: "marketing"
    },
    {
        id: "event-management",
        name: "Event Management",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🎉%3C/text%3E%3C/svg%3E",
        category: "non-tech",
        subcategory: "marketing"
    },
    {
        id: "entrepreneurship-startup",
        name: "Entrepreneurship and Startup",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
        category: "non-tech",
        subcategory: "marketing"
    },
    // Non-Tech Domains - Creative Media & Design Subcategory
    {
        id: "photography",
        name: "Photography",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E📷%3C/text%3E%3C/svg%3E",
        category: "non-tech",
        subcategory: "creative"
    },
    {
        id: "video-editing",
        name: "Video Editing",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🎬%3C/text%3E%3C/svg%3E",
        category: "non-tech",
        subcategory: "creative"
    },
    {
        id: "content-writing",
        name: "Content Writing",
        icon: "/Images/Logo/ContentWriting.png",
        category: "non-tech",
        subcategory: "creative"
    },
    {
        id: "ui-ux",
        name: "UI/UX",
        icon: "/Images/Logo/UIUX.png",
        category: "non-tech",
        subcategory: "creative"
    },
    {
        id: "graphic-designing",
        name: "Graphic Designing",
        icon: "/Images/Logo/GD.png",
        category: "non-tech",
        subcategory: "creative"
    },
];

const Recruitment = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const animatedElements = document.querySelectorAll(".fade-up, .fade-down, .zoom-in, .slide-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );
        animatedElements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleApplyNow = () => {
        window.open('https://forms.gle/xSszBVcYnhHnEp7c8', '_blank');
    };

    const handleDomainClick = (domainId) => {
        navigate(`/recruitment/${domainId}`);
    };

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const techDomains = domains.filter(d => d.category === 'tech');
    const nonTechDomains = domains.filter(d => d.category === 'non-tech');

    const DomainCard = ({ domain, index }) => (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDomainClick(domain.id)}
            className="lead-card cursor-pointer"
        >
            <div className="icon-container" style={{ marginBottom: '1.5rem' }}>
                <img
                    src={domain.icon}
                    alt={domain.name}
                    className="domain-icon" // Uses Master CSS animation & shadow
                    style={{ width: '80px', height: '80px' }} // Adjusted size for grid
                />
            </div>
            <h3 className="lead-title text-center">
                {domain.name}
            </h3>
        </motion.div>
    );

    return (
        <div className="body">
            <div className="min-h-screen w-full relative overflow-hidden">
                {/* Particles Background */}
                <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>

                {/* Dragon lives outside the split so it can fly anywhere */}


                <div className="max-w-7xl mx-auto relative z-10">

                    {/* === HERO SECTION (SPLIT 50/50) === */}
                    <div className="hero-section">

                        {/* LEFT SIDE: THRONE */}
                        <div className="hero-visual-side">
                            <img
                                src={throne}
                                alt="Iron Throne"
                                className="iron-throne"
                            />
                        </div>

                        {/* RIGHT SIDE: CONTENT BOX */}
                        <div className="hero-content-side">
                            <div className="hero-box fade-down zoom-in">
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="hero-content"
                                >
                                    <h1 className="hero-title">Join E-Labs</h1>
                                    <div className="divider-line"></div>
                                    <p className="hero-subtitle">
                                        Explore our domains and discover where your passion meets opportunity
                                    </p>

                                    <div className="hero-buttons">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleApplyNow}
                                            className="apply-btn"
                                        >
                                            APPLY NOW
                                        </motion.button>

                                        <div className="nav-buttons">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => scrollToSection('tech-domains')}
                                                className="nav-btn"
                                            >
                                                <span>Tech Domains</span>
                                                {/* SVG Here */}
                                            </motion.button>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => scrollToSection('non-tech-domains')}
                                                className="nav-btn"
                                            >
                                                <span>Non-Tech Domains</span>
                                                {/* SVG Here */}
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    {/* TECH DOMAINS SECTION */}
                    <div id="tech-domains" className="domains-section">
                        <h2 className="section-heading fade-up">Tech Domains</h2>

                        {/* REPLACED Tailwind Grid with Theme 'leads-grid' */}
                        <div className="leads-grid">
                            {techDomains.map((domain, index) => (
                                <DomainCard key={domain.id} domain={domain} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* NON-TECH DOMAINS SECTION */}
                    <div id="non-tech-domains" className="domains-section mt-24 mb-16">
                        <h2 className="section-heading fade-up">Non-Tech Domains</h2>

                        {/* Marketing Subcategory */}
                        <div className="mt-12">
                            <h3 className="text-3xl font-bold text-center mb-8 text-white/90 fade-up">
                                Marketing
                            </h3>
                            <div className="leads-grid">
                                {nonTechDomains
                                    .filter(d => d.subcategory === 'marketing')
                                    .map((domain, index) => (
                                        <DomainCard key={domain.id} domain={domain} index={index} />
                                    ))
                                }
                            </div>
                        </div>

                        {/* Creative Media & Design Subcategory */}
                        <div className="mt-16">
                            <h3 className="text-3xl font-bold text-center mb-8 text-white/90 fade-up">
                                Creative Media & Design
                            </h3>
                            <div className="leads-grid">
                                {nonTechDomains
                                    .filter(d => d.subcategory === 'creative')
                                    .map((domain, index) => (
                                        <DomainCard key={domain.id} domain={domain} index={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Non-Tech Domains */}
                <div id="non-tech-domains" className="domains-section mt-24 mb-16">
                    <h2 className="section-heading fade-up">Non-Tech Domains</h2>
                    <div className="leads-grid">
                        {nonTechDomains.map((domain, index) => (
                            <DomainCard key={domain.id} domain={domain} index={index} />
                        ))}
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    className="hero-subtitle text-center mt-8 pb-12"
                >
                    Click on any domain to view recruitment criteria and contact information
                </motion.p>
            </div>
        </div>
    </div>
    );
};

export default Recruitment;