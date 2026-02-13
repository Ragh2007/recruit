import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Recruitment.css";
import { useNavigate } from "react-router-dom";
// Ensure this path matches your project structure
import throne from "/Images/1770564850_pasted.png";

const domains = [
    { id: "marketing-pr-event-management", name: "Marketing PR & Event Management", icon: "/Images/Logo/Marketing.png", category: "non-tech" },
    { id: "web-development", name: "Web Development", icon: "/Images/Logo/WebDevelopment.png", category: "tech" },
    { id: "cloud-computing", name: "Cloud Computing", icon: "/Images/Logo/CloudComputing.png", category: "tech" },
    { id: "iot-embedded-systems", name: "IoT & Embedded Systems", icon: "/Images/Logo/IoT&Embedded.png", category: "tech" },
    { id: "content-writing", name: "Content Writing", icon: "/Images/Logo/ContentWriting.png", category: "non-tech" },
    { id: "android-development", name: "Android Development", icon: "/Images/Logo/AppDevelopment.png", category: "tech" },
    { id: "data-analytics", name: "Data Analytics", icon: "/Images/Logo/DataAnalytics.png", category: "tech" },
    { id: "photography-video", name: "Photography & Video", icon: "/Images/Logo/PhotoVideoEditing.png", category: "non-tech" },
    { id: "java", name: "Java", icon: "/Images/Logo/Java.png", category: "tech" },
    { id: "ai-ml", name: "AI/ML", icon: "/Images/Logo/AIML.png", category: "tech" },
    { id: "cyber-security", name: "Cyber Security", icon: "/Images/Logo/CyberSecurity.png", category: "tech" },
    { id: "graphics-designing-ui-ux", name: "Graphics Designing & UI/UX", icon: "/Images/Logo/UIUX.png", category: "non-tech" },
    { id: "game-development", name: "Game Development", icon: "/Images/Logo/gamedev.png", category: "tech" },
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
        alert("Application form coming soon! Please check back later.");
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
            <div className="icon-container">
                <img 
                    src={domain.icon} 
                    alt={domain.name} 
                    className="domain-icon" 
                />
            </div>
            <h3 className="lead-title text-center">
                {domain.name}
            </h3>
        </motion.div>
    );

    return (
    <div className="body">
        {/* Snow Animation Container */}
        <div className="snow-container">
            {[...Array(60)].map((_, i) => {
                const duration = 6 + Math.random() * 6; 
                const size = Math.random() < 0.5 ? 'small-flake' : 'large-flake';
                return (
                    <div 
                        key={i} 
                        className={`ice-flake ${size}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${duration}s`,
                            opacity: Math.random() * 0.7
                        }}
                    >❄</div>
                );
            })}
        </div>

        <div className="min-h-screen w-full relative overflow-hidden">
            <div id="particles-js" className="absolute inset-0 z-0 pointer-events-none"></div>

            {/* Motto - Positioned via CSS to Left */}
            <p className="house-motto">Winter is Coming...</p>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="hero-section">
                    <div className="hero-visual-side">
                         <img src={throne} alt="Iron Throne" className="iron-throne"/>
                    </div>

                    <div className="hero-content-side">
                        <div className="hero-box fade-down zoom-in">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="hero-content"
                            >
                                {/* UPDATED: Title Text */}
                                <h1 className="hero-title">
                                    Join <span className="keep-together">E-labs</span>
                                </h1>
                                <div className="divider-line"></div>
                                <p className="hero-subtitle">
                                    Explore our domains and discover where your passion meets opportunity
                                </p>

                                <div className="hero-buttons">
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleApplyNow}
                                        className="apply-btn-sheen"
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
                                        </motion.button>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => scrollToSection('non-tech-domains')}
                                            className="nav-btn"
                                        >
                                            <span>Non-Tech Domains</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Tech Domains */}
                <div id="tech-domains" className="domains-section">
                    <h2 className="section-heading fade-up">Tech Domains</h2>
                    <div className="leads-grid">
                        {techDomains.map((domain, index) => (
                            <DomainCard key={domain.id} domain={domain} index={index} />
                        ))}
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