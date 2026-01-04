export const portfolioData = {
    hero: {
        title: "Edge AI & Computer Vision Engineer",
        valueProp: "Building production-ready solutions at the intersection of AI, Robotics, and Systems Engineering.",
        ctas: [
            { label: "View Projects", link: "/projects", primary: true },
            { label: "Download Resume", link: "/resume.pdf", primary: false }
        ]
    },
    projects: [
        {
            id: "orbix",
            title: "OrbiX",
            subtitle: "Autonomous Delivery System",
            description: "Raspberry Pi 5–based autonomous robot using Dijkstra path planning and optimized YOLOv3 inference achieving 30 FPS.",
            longDescription: "OrbiX is a complete autonomous robotic ecosystem. It features a custom sensor fusion pipeline combining LiDAR and Ultrasonic data for real-time obstacle avoidance. The system utilizes Dijkstra's algorithm for global path planning and a highly optimized YOLOv3-tiny model for object detection in dynamic environments.",
            tech: ["ROS2", "Python", "Raspberry Pi 5", "YOLOv3", "Dijkstra"],
            metrics: [
                "98% route efficiency via Dijkstra global path planning",
                "30 FPS inference on edge hardware with optimized YOLOv3 pipeline",
                "Sub-100 ms reaction latency via sensor fusion for obstacle avoidance"
            ],
            github: "https://github.com/daivik-22/orbix",
            demo: "#"
        },
        {
            id: "deepcode",
            title: "DeepCode Reviewer",
            subtitle: "AI-Powered Code Analysis",
            description: "LLM-driven code review tool for automated quality, security, and performance analysis using Google Gemini API.",
            longDescription: "DeepCode Reviewer automates the tedious parts of code reviews. By leveraging the Google Gemini API, it analyzes PRs for potential security vulnerabilities, performance bottlenecks, and adherence to style guides, providing actionable feedback directly in the Flask-based dashboard.",
            tech: ["Python", "Flask", "Google Gemini API", "Git"],
            metrics: [
                "Automated security vulnerability detection with 90%+ catch rate",
                "Significant reduction in manual review time for boilerplate checks",
                "Integrated suggesting engine for performance optimization deltas"
            ],
            github: "https://github.com/daivik-22/Deep-Code-Reviewer",
            demo: "#"
        },
        {
            id: "parkinsons",
            title: "Parkinson’s Disease Prediction",
            subtitle: "Healthcare ML System",
            description: "Predictive system for Parkinson's disease diagnosis using PCA-based feature reduction and Logistic Regression.",
            longDescription: "This project addresses early diagnosis of Parkinson's using acoustic and postural data. By applying PCA, we reduced the feature space from 22 to 10 dimensions, improving model interpretability and reducing variance without sacrificing the 0.92 AUC-ROC performance.",
            tech: ["Python", "Scikit-learn", "PCA", "Logistic Regression"],
            metrics: [
                "85% precision and 0.92 AUC-ROC for diagnosis accuracy",
                "Reduced feature space from 22 to 10 via PCA without accuracy loss",
                "Deployed as a lightweight diagnostic tool for clinical research"
            ],
            github: "https://github.com/daivik-22",
            demo: "#"
        }
    ],
    experience: [
        {
            id: "ntt-data",
            role: "Edge AI Intern",
            company: "NTT DATA Business Solutions (Singapore)",
            period: "Dec 2025 – Present",
            location: "Singapore",
            description: "Gained hands-on experience with enterprise-scale IIoT and edge architectures.",
            summaryBullets: [
                "Built enterprise-grade edge intelligence using Litmus Edge",
                "Integrated SCADA dashboards with Ignition for real-time monitoring",
                "Implemented MQTT-based data pipelines for industrial use cases"
            ],
            detailedBullets: [
                "Worked on deploying edge intelligence solutions for industrial environments using Litmus Edge",
                "Designed and configured Ignition SCADA dashboards to visualize real-time machine and sensor data",
                "Implemented MQTT-based messaging pipelines for low-latency data transmission",
                "Collaborated with cross-functional teams to improve system reliability and deployment stability",
                "Gained hands-on experience with enterprise-scale IIoT and edge architectures"
            ],
            tech: ["Litmus Edge", "Ignition", "MQTT", "IIoT"]
        },
        {
            id: "rovr",
            role: "Software Engineering Intern",
            company: "Rovr — Y Combinator-backed Startup",
            period: "Aug 2025 – Dec 2025",
            location: "Remote",
            description: "Improved code quality, modularity, and deployment workflows in a fast-paced environment.",
            summaryBullets: [
                "Developed backend services for AI-powered requirements capture",
                "Built production-ready Python services used by enterprise customers",
                "Contributed to startup-scale system design and deployment"
            ],
            detailedBullets: [
                "Built and maintained backend services supporting AI-driven requirements engineering workflows",
                "Designed RESTful APIs using Python and Flask with a focus on scalability and reliability",
                "Integrated LLM-based components into production systems",
                "Worked closely with founders and product teams in a fast-paced YC startup environment",
                "Improved code quality, modularity, and deployment workflows"
            ],
            tech: ["Python", "Flask", "LLMs", "REST APIs"]
        },
        {
            id: "noqnow",
            role: "Software Developer",
            company: "noQnow",
            period: "Mar 2020 – Dec 2020",
            location: "India",
            description: "Focused on usability, reliability, and rapid iteration in real-world environments.",
            summaryBullets: [
                "Built a full-stack digital queue management platform",
                "Deployed solution across 15+ retail and grocery stores",
                "Implemented contactless verification during COVID-19"
            ],
            detailedBullets: [
                "Designed and developed a full-stack queue management system to reduce physical crowding",
                "Implemented SMS-based contactless verification to enhance customer safety during COVID-19",
                "Deployed the platform to 15+ grocery and retail stores",
                "Worked across frontend, backend, and deployment layers, gaining end-to-end product experience",
                "Focused on usability, reliability, and rapid iteration in real-world environments"
            ],
            tech: ["Full-Stack", "Node.js", "React", "SMS API"]
        }
    ],
    skills: [
        {
            category: "🟣 AI, machine Learning & Computer Vision",
            items: ["YOLO (Real-time Object Detection)", "OpenCV", "Scikit-learn", "Model Optimization & Inference (NMS, FPS tuning)", "Feature Engineering & PCA", "Supervised Machine Learning Models"],
            isPrimary: true
        },
        {
            category: "🟣 Edge AI & Robotics Systems",
            items: ["Raspberry Pi (Edge Deployment)", "Autonomous Navigation & Path Planning (Dijkstra’s Algorithm)", "Sensor Integration (Ultrasonic, Camera, RFID)", "Embedded AI Inference", "Real-time Decision Systems"],
            isPrimary: true
        },
        {
            category: "🟣 Backend Development & AI Integration",
            items: ["Python", "Flask (REST APIs)", "LLM API Integration (Gemini)", "Data Processing (NumPy, Pandas)", "AI-powered Application Development"]
        },
        {
            category: "🟣 Industrial IoT & Edge Platforms",
            items: ["MQTT", "Litmus Edge", "Ignition SCADA", "Industrial Data Pipelines", "Real-time Edge Monitoring"]
        },
        {
            category: "🟣 Tools & Development Platforms",
            items: ["Git & GitHub", "Docker (Basic Containerization)", "Linux", "Google Colab", "Power BI"]
        }
    ],
    about: {
        p1: "I am an Edge AI & Computer Vision Engineer dedicated to building production-ready systems that bridge the gap between complex algorithms and the physical world. My focus lies in creating efficient, scalable, and impact-driven solutions for robotics and distributed edge devices.",
        p2: "With a strong foundation in systems thinking and a performance-first mindset, I specialize in sensor fusion, real-time object detection, and hardware-aware AI optimization. I believe in engineering credibility through measurable results and transparent technical depth."
    },
    contact: {
        email: "daivikreddy2004@gmail.com",
        secondaryEmail: "daivikreddy@outlook.com",
        github: "https://github.com/daivik-22",
        linkedin: "https://www.linkedin.com/in/daivik-reddy-41281124b/"
    }
};
