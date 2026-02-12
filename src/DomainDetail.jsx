import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DomainDetail.css";

const domainsData = {
    "marketing-pr-event-management": {
        name: "Marketing PR & Event Management",
        icon: "/Images/Logo/Marketing.png",
        criteria: [
            "Strong communication and interpersonal skills",
            "Experience in event planning and coordination",
            "Creative thinking and problem-solving abilities",
            "Proficiency in social media marketing",
            "Ability to work under pressure and meet deadlines",
        ],
        domainLead: {
            name: "Priya Sharma",
            phone: "+91 98765 43210",
        },
        assistantLead: {
            name: "Rahul Verma",
            phone: "+91 98765 43211",
        },
    },
    "web-development": {
        name: "Web Development",
        icon: "/Images/Logo/WebDevelopment.png",
        criteria: [
            "Proficiency in HTML, CSS, and JavaScript",
            "Experience with React, Vue, or Angular",
            "Understanding of responsive design principles",
            "Knowledge of version control (Git)",
            "Problem-solving and debugging skills",
        ],
        domainLead: {
            name: "Amit Kumar",
            phone: "+91 98765 43212",
        },
        assistantLead: {
            name: "Sneha Patel",
            phone: "+91 98765 43213",
        },
    },
    "cloud-computing": {
        name: "Cloud Computing",
        icon: "/Images/Logo/CloudComputing.png",
        criteria: [
            "Knowledge of AWS, Azure, or Google Cloud Platform",
            "Understanding of cloud architecture and services",
            "Experience with containerization (Docker, Kubernetes)",
            "Familiarity with DevOps practices",
            "Strong analytical and troubleshooting skills",
        ],
        domainLead: {
            name: "Vikram Singh",
            phone: "+91 98765 43214",
        },
        assistantLead: {
            name: "Ananya Reddy",
            phone: "+91 98765 43215",
        },
    },
    "iot-embedded-systems": {
        name: "IoT & Embedded Systems",
        icon: "/Images/Logo/IoT&Embedded.png",
        criteria: [
            "Knowledge of microcontrollers (Arduino, Raspberry Pi)",
            "Understanding of sensor integration and protocols",
            "Programming skills in C/C++ or Python",
            "Experience with circuit design and hardware",
            "Problem-solving and hands-on project experience",
        ],
        domainLead: {
            name: "Arjun Mehta",
            phone: "+91 98765 43216",
        },
        assistantLead: {
            name: "Kavya Iyer",
            phone: "+91 98765 43217",
        },
    },
    "content-writing": {
        name: "Content Writing",
        icon: "/Images/Logo/ContentWriting.png",
        criteria: [
            "Excellent writing and grammar skills",
            "Creativity and storytelling abilities",
            "Research and fact-checking capabilities",
            "Understanding of SEO principles",
            "Ability to adapt writing style for different audiences",
        ],
        domainLead: {
            name: "Neha Gupta",
            phone: "+91 98765 43218",
        },
        assistantLead: {
            name: "Rohan Das",
            phone: "+91 98765 43219",
        },
    },
    "android-development": {
        name: "Android Development",
        icon: "/Images/Logo/AppDevelopment.png",
        criteria: [
            "Proficiency in Java or Kotlin",
            "Experience with Android Studio and SDK",
            "Understanding of Material Design guidelines",
            "Knowledge of RESTful APIs and JSON",
            "Problem-solving and debugging skills",
        ],
        domainLead: {
            name: "Karthik Nair",
            phone: "+91 98765 43220",
        },
        assistantLead: {
            name: "Divya Menon",
            phone: "+91 98765 43221",
        },
    },
    "data-analytics": {
        name: "Data Analytics",
        icon: "/Images/Logo/DataAnalytics.png",
        criteria: [
            "Proficiency in Python, R, or SQL",
            "Experience with data visualization tools (Tableau, Power BI)",
            "Understanding of statistical analysis and modeling",
            "Knowledge of Excel and data manipulation",
            "Analytical thinking and attention to detail",
        ],
        domainLead: {
            name: "Sanjay Joshi",
            phone: "+91 98765 43222",
        },
        assistantLead: {
            name: "Pooja Agarwal",
            phone: "+91 98765 43223",
        },
    },
    "photography-video": {
        name: "Photography & Video",
        icon: "/Images/Logo/PhotoVideoEditing.png",
        criteria: [
            "Experience with DSLR/mirrorless cameras",
            "Proficiency in photo/video editing software (Photoshop, Premiere Pro)",
            "Understanding of composition and lighting",
            "Creative vision and storytelling through visuals",
            "Portfolio showcasing previous work",
        ],
        domainLead: {
            name: "Aditya Rao",
            phone: "+91 98765 43224",
        },
        assistantLead: {
            name: "Riya Kapoor",
            phone: "+91 98765 43225",
        },
    },
    java: {
        name: "Java",
        icon: "/Images/Logo/Java.png",
        criteria: [
            "Strong knowledge of Java programming",
            "Understanding of OOP concepts",
            "Experience with Java frameworks (Spring, Hibernate)",
            "Knowledge of data structures and algorithms",
            "Problem-solving and coding skills",
        ],
        domainLead: {
            name: "Suresh Babu",
            phone: "+91 98765 43226",
        },
        assistantLead: {
            name: "Meera Krishnan",
            phone: "+91 98765 43227",
        },
    },
    "ai-ml": {
        name: "AI/ML",
        icon: "/Images/Logo/AIML.png",
        criteria: [
            "Proficiency in Python and ML libraries (TensorFlow, PyTorch, scikit-learn)",
            "Understanding of machine learning algorithms",
            "Experience with data preprocessing and feature engineering",
            "Knowledge of neural networks and deep learning",
            "Strong mathematical and analytical skills",
        ],
        domainLead: {
            name: "Dr. Rajesh Kumar",
            phone: "+91 98765 43228",
        },
        assistantLead: {
            name: "Shruti Desai",
            phone: "+91 98765 43229",
        },
    },
    "cyber-security": {
        name: "Cyber Security",
        icon: "/Images/Logo/CyberSecurity.png",
        criteria: [
            "Understanding of network security and protocols",
            "Knowledge of ethical hacking and penetration testing",
            "Familiarity with security tools (Wireshark, Metasploit)",
            "Understanding of cryptography and encryption",
            "Problem-solving and analytical thinking",
        ],
        domainLead: {
            name: "Varun Malhotra",
            phone: "+91 98765 43230",
        },
        assistantLead: {
            name: "Ishita Saxena",
            phone: "+91 98765 43231",
        },
    },
    "graphics-designing-ui-ux": {
        name: "Graphics Designing & UI/UX",
        icon: "/Images/Logo/UIUX.png",
        criteria: [
            "Proficiency in design tools (Figma, Adobe XD, Illustrator)",
            "Understanding of design principles and color theory",
            "Experience with user research and wireframing",
            "Knowledge of responsive and accessible design",
            "Creative portfolio showcasing design work",
        ],
        domainLead: {
            name: "Tanvi Shah",
            phone: "+91 98765 43232",
        },
        assistantLead: {
            name: "Nikhil Bhatt",
            phone: "+91 98765 43233",
        },
    },
    "game-development": {
        name: "Game Development",
        icon: "/Images/Logo/gamedev.png",
        criteria: [
            "Proficiency in Unity or Unreal Engine",
            "Programming skills in C# or C++",
            "Understanding of game design principles",
            "Experience with 2D/3D graphics and animation",
            "Creative thinking and problem-solving abilities",
        ],
        domainLead: {
            name: "Aarav Chopra",
            phone: "+91 98765 43234",
        },
        assistantLead: {
            name: "Simran Kaur",
            phone: "+91 98765 43235",
        },
    },
};

const DomainDetail = () => {
    const { domainId } = useParams();
    const navigate = useNavigate();
    const domain = domainsData[domainId];

    useEffect(() => {
        // Initialize particles.js
        const initParticles = () => {
            if (window.particlesJS) {
                window.particlesJS('particles-js-domain', {
                    "particles": {
                        "number": { "value": 50 },
                        "color": { "value": "#F7941D" },
                        "shape": { "type": "circle" },
                        "opacity": { "value": 0.4 },
                        "size": { "value": 3 },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#F7941D",
                            "opacity": 0.3,
                            "width": 1
                        },
                        "move": { "enable": true, "speed": 1.5 }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": { "enable": true, "mode": "repulse" }
                        }
                    }
                });
            } else {
                setTimeout(initParticles, 100);
            }
        };

        const timer = setTimeout(initParticles, 100);

        // Intersection Observer for scroll animations
        const animatedElements = document.querySelectorAll(
            ".fade-up-domain, .fade-left-domain, .fade-right-domain"
        );

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

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    if (!domain) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-textColor1 dark:text-black mb-4">
                        Domain Not Found
                    </h1>
                    <Link
                        to="/recruitment"
                        className="text-textColor1 hover:underline text-lg"
                    >
                        ← Back to Recruitment
                    </Link>
                </div>
            </div>
        );
    }

    const handleApplyNow = () => {
        alert(`Application for ${domain.name} coming soon!`);
    };

    return (
        <div className="min-h-screen w-full px-4 py-8 md:py-12" style={{ position: 'relative' }}>
            {/* Particles.js Background */}
            <div id="particles-js-domain" style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                zIndex: 0,
                top: 0,
                left: 0,
                pointerEvents: 'none'
            }}></div>

            <div className="max-w-5xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6"
                >
                    <button
                        onClick={() => navigate("/recruitment")}
                        className="back-button"
                    >
                        <span>←</span> Back to Recruitment
                    </button>
                </motion.div>

                {/* Header with Apple Glass Effect */}
                <div className="domain-header fade-up-domain">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="header-content"
                    >
                        <div className="icon-container">
                            <img
                                src={domain.icon}
                                alt={domain.name}
                                className="domain-icon"
                            />
                        </div>
                        <h1 className="domain-title">
                            {domain.name}
                        </h1>
                        <div className="title-divider"></div>
                    </motion.div>
                </div>

                {/* Main Content Card with Apple Glass */}
                <div className="content-card fade-up-domain">
                    {/* Recruitment Criteria */}
                    <div className="criteria-section fade-left-domain">
                        <h2 className="section-title">
                            Recruitment Criteria
                        </h2>
                        <div className="section-divider"></div>
                        <ul className="criteria-list">
                            {domain.criteria.map((criterion, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="criterion-item"
                                >
                                    <span className="check-icon"></span>
                                    <span className="criterion-text">{criterion}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Domain Leads */}
                    <div className="leads-grid">
                        {/* Domain Lead */}
                        <div className="lead-card fade-left-domain">
                            <h3 className="lead-title">Domain Lead</h3>
                            <div className="lead-info">
                                <p className="info-item">
                                    <span className="info-label">Name:</span>{" "}
                                    {domain.domainLead.name}
                                </p>
                                <p className="info-item">
                                    <span className="info-label">Phone:</span>{" "}
                                    {domain.domainLead.phone}
                                </p>
                            </div>
                        </div>

                        {/* Assistant Lead */}
                        <div className="lead-card fade-right-domain">
                            <h3 className="lead-title">Assistant Lead</h3>
                            <div className="lead-info">
                                <p className="info-item">
                                    <span className="info-label">Name:</span>{" "}
                                    {domain.assistantLead.name}
                                </p>
                                <p className="info-item">
                                    <span className="info-label">Phone:</span>{" "}
                                    {domain.assistantLead.phone}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleApplyNow}
                        className="apply-button"
                    >
                        Apply for {domain.name}
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default DomainDetail;
