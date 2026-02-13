import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./DomainDetail.css";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const domainsData = {
    // Tech Domains
    "iot": {
        name: "IOT",
        icon: "/Images/Logo/IoT&Embedded.png",
        criteria: [
            "Familiar with basic communication protocols",
            "Good understanding of how microcontrollers work in a system",
            "Problem-solving mindset",
            "Strong grasp on hardware and software integration of fundamental systems",
        ],
        domainLead: {
            name: "Dibyo Sundar Basu",
            phone: "+91 824 070 2288",
        },
        assistantLead: {
            name: "Samridhya Mukherjee & Saurav Jena",
            phone: "+91 70036 56695 / +91 7656 072 305",
        },
    },
    "embedded-systems": {
        name: "Embedded Systems",
        icon: "/Images/Logo/IoT&Embedded.png",
        criteria: [
            "Familiar with basic communication protocols",
            "Good understanding of how microcontrollers work in a system",
            "Problem-solving mindset",
            "Strong grasp on hardware and software integration of fundamental systems",
        ],
        domainLead: {
            name: "Suprit Mangaraj",
            phone: "+91 79 7828 0261",
        },
        assistantLead: {
            name: "Saurav Jena & Utsah Puspalak",
            phone: "+91 7656 072 305",
        },
    },
    "cloud-computing": {
        name: "Cloud Computing",
        icon: "/Images/Logo/CloudComputing.png",
        criteria: [
            "Understanding of cloud basics",
            "Familiarity with GitHub",
            "Interest in learning cloud platforms and services",
        ],
        domainLead: {
            name: "Jagan Kumar Hotta",
            phone: "Contact via E-Labs",
        },
        assistantLead: {
            name: "Ritu Shree",
            phone: "Contact via E-Labs",
        },
    },
    "game-development": {
        name: "Game Development",
        icon: "/Images/Logo/gamedev.png",
        criteria: [
            "Know the basics of game development",
            "Understanding of OOPS (C#)",
            "Familiarity with Unity",
            "Basic understanding of games and their genres",
            "Deep knowledge not required - basics should be researched",
        ],
        domainLead: {
            name: "Nayantika",
            phone: "+91 89617 49477",
        },
        assistantLead: {
            name: "Swatha",
            phone: "+91 90314 76070",
        },
    },
    "android-development": {
        name: "Android Development",
        icon: "/Images/Logo/AppDevelopment.png",
        criteria: [
            "Basic knowledge of Flutter, Kotlin, or Java (knowing any one is enough)",
            "Interest in Android/App development and willingness to learn if resources are provided",
            "Good problem-solving mindset and eagerness to improve",
            "🌱 Opportunity: Students who perform well can contribute to our open-source projects like KIITO App and MapKIIT",
        ],
        domainLead: {
            name: "Abinash Mohanty",
            phone: "+91 8455894907",
        },
        assistantLead: {
            name: "Yogisha Rani",
            phone: "+91 7667408570",
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
            name: "Abinash Mohanty",
            phone: "+91 8455894907",
        },
        assistantLead: {
            name: "Raghav Sinha",
            phone: "+91 72678 44718",
        },
    },
    "java": {
        name: "Java",
        icon: "/Images/Logo/Java.png",
        criteria: [
            "Strong core Java fundamentals",
            "Good programming and problem-solving skills",
            "Clear communication skills and confident in explaining concepts",
            "Interest in teaching peers",
            "Familiarity with DSA using Java will be an added advantage",
        ],
        domainLead: {
            name: "Arpita Som",
            phone: "+91 89876 69431",
        },
        assistantLead: {
            name: "Divyansh Upadhyay & Ayush Chakraborty",
            phone: "+91 90739 11397",
        },
    },
    "cyber-security": {
        name: "Cyber Security",
        icon: "/Images/Logo/CyberSecurity.png",
        criteria: [
            "Basic knowledge of Linux",
            "Familiarity with at least one scripting language (preferably Python or Bash)",
            "Interest in cybersecurity",
            "Awareness of relevant cybersecurity news/events",
        ],
        domainLead: {
            name: "Swayam Mishra",
            phone: "Contact via E-Labs",
        },
        assistantLead: {
            name: "Shashank Mishra",
            phone: "Contact via E-Labs",
        },
    },
    "ai-ml": {
        name: "AI/ML",
        icon: "/Images/Logo/AIML.png",
        criteria: [
            "Basic Python programming",
            "Basic Statistics and Probability",
            "Interest in machine learning and artificial intelligence",
        ],
        domainLead: {
            name: "Arkabrata Roy",
            phone: "+91 90511 55639",
        },
        assistantLead: {
            name: "Sarthakbrata Halder",
            phone: "Contact via E-Labs",
        },
    },
    "data-analytics": {
        name: "Data Analytics",
        icon: "/Images/Logo/DataAnalytics.png",
        criteria: [
            "Basic understanding of data analysis",
            "Good knowledge of Excel",
            "Basic SQL for data extraction",
            "Interest in learning and working with data",
        ],
        domainLead: {
            name: "Anusha Sanghai & Nishant Dudhe",
            phone: "+91 6353 364 330",
        },
        assistantLead: {
            name: "Kaustav Ghosh",
            phone: "Contact via E-Labs",
        },
    },
    // Non-Tech Domains - Marketing
    "marketing": {
        name: "Marketing",
        icon: "/Images/Logo/Marketing.png",
        criteria: [
            "Strong communication skills",
            "Basic prior knowledge or experience in handling marketing activities",
            "Responsible and proactive attitude",
            "Capable of contributing effectively to planning and execution",
        ],
        domainLead: {
            name: "Priyanshu Aryan Panda",
            phone: "+91 87634 18626",
        },
        assistantLead: {
            name: "Shreyas",
            phone: "+91 94374 71920",
        },
    },
    "event-management": {
        name: "Event Management",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🎉%3C/text%3E%3C/svg%3E",
        criteria: [
            "Strong communication skills",
            "Basic prior knowledge or experience in event management",
            "Responsible and proactive attitude",
            "Capable of contributing effectively to planning and execution",
        ],
        domainLead: {
            name: "Priyanshu Aryan Panda",
            phone: "+91 87635 18626",
        },
        assistantLead: {
            name: "Anwesa Bose",
            phone: "+91 6290 550 622",
        },
    },
    "entrepreneurship-startup": {
        name: "Entrepreneurship and Startup",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E",
        criteria: [
            "Interest in entrepreneurship and startups",
            "Creative and innovative thinking",
            "Strong communication and networking skills",
            "Willingness to learn about business development",
        ],
        domainLead: {
            name: "Prajjwal",
            phone: "+91 63064 24579",
        },
        assistantLead: {
            name: "Assistant Lead",
            phone: "Contact via E-Labs",
        },
    },
    // Non-Tech Domains - Creative Media & Design
    "photography": {
        name: "Photography",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E📷%3C/text%3E%3C/svg%3E",
        criteria: [
            "Basic understanding of camera fundamentals (ISO, aperture, shutter speed) and shooting modes",
            "Knowledge of composition basics (rule of thirds, framing, leading lines, lighting)",
            "Familiarity with basic photo editing tools (Lightroom/Snapseed/Photoshop)",
            "Willingness to learn, practice regularly, and improve photography skills",
        ],
        domainLead: {
            name: "Suchandra Das",
            phone: "+91 96117 87183",
        },
        assistantLead: {
            name: "Pratichi Mohapatra",
            phone: "Contact via E-Labs",
        },
    },
    "video-editing": {
        name: "Video Editing",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='0.9em' font-size='90'%3E🎬%3C/text%3E%3C/svg%3E",
        criteria: [
            "Basic knowledge of any editing software (CapCut/Premiere Pro/DaVinci Resolve)",
            "Understanding of simple cuts, text, music, beat sync, basic colour grading, and aspect ratios",
            "Awareness of social media trending reels",
            "Willingness to learn, practice regularly, and improve editing skills",
        ],
        domainLead: {
            name: "Shoveet Kumar Behera & Priya Kumari",
            phone: "+91 93375 27240 / +91 83880 49310",
        },
        assistantLead: {
            name: "Assistant Lead",
            phone: "Contact via E-Labs",
        },
    },
    "content-writing": {
        name: "Content Writing",
        icon: "/Images/Logo/ContentWriting.png",
        criteria: [
            "English writing skills",
            "Ability to write social media captions and emails",
            "Candidates should preferably carry their own written samples",
        ],
        domainLead: {
            name: "Anand Jadon",
            phone: "+91 88658 00347",
        },
        assistantLead: {
            name: "Prisha Sekhawat",
            phone: "Contact via E-Labs",
        },
    },
    "ui-ux": {
        name: "UI/UX",
        icon: "/Images/Logo/UIUX.png",
        criteria: [
            "Basic knowledge in Figma",
            "Understanding of autolayouts, constraints, frame resizing",
            "Familiarity with basic UI/UX functions and tools",
        ],
        domainLead: {
            name: "Anushka Singh",
            phone: "+91 7488 092 129",
        },
        assistantLead: {
            name: "Soumya Mohapatra",
            phone: "Contact via E-Labs",
        },
    },
    "graphic-designing": {
        name: "Graphic Designing",
        icon: "/Images/Logo/GD.png",
        criteria: [
            "Basic knowledge in Figma/Canva/Photoshop/Illustrator/Da Vinci Resolve (any one is acceptable)",
            "Creative thinking and design sense",
            "Willingness to learn and improve design skills",
        ],
        domainLead: {
            name: "Snigdha Dutta",
            phone: "Contact via E-Labs",
        },
        assistantLead: {
            name: "Soumya Mohapatra",
            phone: "+91 70085 34142",
        },
    },
};

const DomainDetail = () => {
    const { domainId } = useParams();
    const navigate = useNavigate();
    const domain = domainsData[domainId];

    // GSAP Scroll Reset
    useEffect(() => {
        gsap.to(window, { duration: 0.5, scrollTo: 0, ease: "power2.out" });
    }, [domainId]);

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
        window.open('https://forms.gle/xSszBVcYnhHnEp7c8', '_blank');
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
                            <div className="leads-list">
                                {domain.domainLead.name.split('&').map((name, index) => {
                                    const phones = domain.domainLead.phone.split('/');
                                    const phone = phones[index] || phones[0]; // Fallback to first phone if matching one not found
                                    return (
                                        <div key={index} className="lead-info-block" style={{
                                            marginBottom: index !== domain.domainLead.name.split('&').length - 1 ? '1.5rem' : '0',
                                            paddingBottom: index !== domain.domainLead.name.split('&').length - 1 ? '1.5rem' : '0',
                                            borderBottom: index !== domain.domainLead.name.split('&').length - 1 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none'
                                        }}>
                                            <p className="info-item">
                                                <span className="info-label">Name:</span>{" "}
                                                {name.trim()}
                                            </p>
                                            <p className="info-item">
                                                <span className="info-label">Phone:</span>{" "}
                                                {phone.trim()}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Assistant Lead */}
                        <div className="lead-card fade-right-domain">
                            <h3 className="lead-title">Assistant Lead</h3>
                            <div className="leads-list">
                                {domain.assistantLead.name.split('&').map((name, index) => {
                                    const phones = domain.assistantLead.phone.split('/');
                                    const phone = phones[index] || phones[0]; // Fallback to first phone
                                    return (
                                        <div key={index} className="lead-info-block" style={{
                                            marginBottom: index !== domain.assistantLead.name.split('&').length - 1 ? '1.5rem' : '0',
                                            paddingBottom: index !== domain.assistantLead.name.split('&').length - 1 ? '1.5rem' : '0',
                                            borderBottom: index !== domain.assistantLead.name.split('&').length - 1 ? '1px solid rgba(197, 160, 89, 0.2)' : 'none'
                                        }}>
                                            <p className="info-item">
                                                <span className="info-label">Name:</span>{" "}
                                                {name.trim()}
                                            </p>
                                            <p className="info-item">
                                                <span className="info-label">Phone:</span>{" "}
                                                {phone.trim()}
                                            </p>
                                        </div>
                                    );
                                })}
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
