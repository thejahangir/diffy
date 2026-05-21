import React from 'react';
import { Button } from './ui/Button';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ArrowLeft, 
  Terminal, 
  Users, 
  Clock, 
  Sparkles,
  Layers,
  Database,
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceNowSyllabusPage: React.FC = () => {
  const handleEnquireClick = () => {
    window.location.hash = '#contact';
    
    // Focus name input and pre-populate message after scrolling
    setTimeout(() => {
      const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
      const nameInput = document.querySelector('input[name="user_name"]') as HTMLInputElement;
      
      if (textarea) {
        textarea.value = "Hi, I am interested in the ServiceNow Admin + Development Training program. Please share details on fees, schedule, and batch starts.";
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      }
      if (nameInput) {
        nameInput.focus();
      }
    }, 800);
  };

  const goHome = () => {
    window.location.hash = '#training';
  };

  const syllabusModules = [
    {
      num: "01",
      title: "Introduction to ServiceNow",
      sections: [
        {
          name: "Overview of ServiceNow",
          bullets: ["What is ServiceNow?", "Key features and benefits", "Common use cases and industry applications"]
        },
        {
          name: "Navigating the ServiceNow Interface",
          bullets: ["User interface overview", "Navigation and search functionality", "Personalizing your workspace"]
        }
      ]
    },
    {
      num: "02",
      title: "ServiceNow Administration",
      sections: [
        {
          name: "User and Group Management",
          bullets: ["Creating and managing users", "Assigning roles and permissions", "Group management and delegation"]
        },
        {
          name: "Data Management",
          bullets: ["Understanding tables and records", "Data schema and relationships", "Importing and exporting data"]
        },
        {
          name: "Forms and Lists",
          bullets: ["Creating and modifying forms", "Configuring list layouts and filters", "Using UI policies and data policies"]
        },
        {
          name: "Business Rules Basics",
          bullets: ["Introduction to Business Rules", "Creating and managing Business Rules", "Use cases and examples"]
        },
        {
          name: "Notifications",
          bullets: ["Configuring notifications", "Email templates and notifications", "Notification triggers and conditions"]
        },
        {
          name: "Service Catalog and Requests",
          bullets: ["Designing and managing the Service Catalog", "Creating catalog items and workflows", "Managing requests and approvals"]
        }
      ]
    },
    {
      num: "03",
      title: "ServiceNow Development",
      sections: [
        {
          name: "Introduction to Scripting",
          bullets: ["Overview of scripting in ServiceNow", "Client-side vs. server-side scripting", "JavaScript basics and ServiceNow APIs"]
        },
        {
          name: "Client Scripts",
          bullets: ["Creating and managing client scripts", "Client Script types and use cases", "Debugging and troubleshooting client scripts"]
        },
        {
          name: "Business Logic",
          bullets: ["Server-side scripting with Business Rules", "Script Includes and their uses", "Scheduled Jobs and Background Scripts"]
        },
        {
          name: "Workflows",
          bullets: ["Creating and managing workflows", "Using Flow Designer for low-code workflows", "Workflow activities and conditions"]
        },
        {
          name: "Service Portal Development",
          bullets: ["Introduction to Service Portal", "Creating and customizing widgets", "Building pages and themes"]
        },
        {
          name: "REST and SOAP Integration",
          bullets: ["Introduction to web services", "Configuring REST and SOAP integrations", "Consuming and creating APIs"]
        }
      ]
    },
    {
      num: "04",
      title: "Advanced Topics",
      sections: [
        {
          name: "Performance and Optimization",
          bullets: ["Performance best practices", "Analyzing and improving performance", "Using Performance Analytics and Reporting"]
        },
        {
          name: "Security and Compliance",
          bullets: ["Understanding Security and Access Control", "Managing security roles and permissions", "Compliance and data protection"]
        },
        {
          name: "Application Development",
          bullets: ["Creating custom applications", "Using Application Studio", "Application scoping and packaging"]
        }
      ]
    },
    {
      num: "05",
      title: "Hands-On Labs and Practice",
      sections: [
        {
          name: "Lab Exercises",
          bullets: ["Practical exercises for administration tasks", "Development scenarios and coding challenges"]
        },
        {
          name: "Case Studies",
          bullets: ["Real-world examples and solutions", "Group projects and presentations"]
        },
        {
          name: "Review and Q&A",
          bullets: ["Recap of key concepts", "Open Q&A session"]
        }
      ]
    },
    {
      num: "06",
      title: "Certification Preparation (Optional)",
      sections: [
        {
          name: "Exam Overview",
          bullets: ["Details of ServiceNow certification exams", "Exam objectives and format"]
        },
        {
          name: "Practice Tests",
          bullets: ["Sample questions and practice exams"]
        },
        {
          name: "Study Tips",
          bullets: ["Recommended study resources", "Exam preparation strategies"]
        }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden bg-slate-950 min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Navigation & Header */}
        <div className="max-w-6xl mx-auto mb-12">
          <motion.button 
            onClick={goHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-semibold group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Syllabus & Course Outline
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              ServiceNow Admin + <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Development Training</span>
            </h1>
          </motion.div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Overview and Curriculum */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-8 space-y-6"
            >
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand-orange" />
                Course Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                The ServiceNow Admin + Development training course is designed to equip participants with the essential skills required to manage and develop solutions on the ServiceNow platform. The course aims to provide a deep understanding of ServiceNow's core functionalities, administration, and development capabilities, ensuring participants can effectively configure, customize, and extend the platform to meet organizational needs.
              </p>
              
              <div className="border-t border-slate-800 pt-6">
                <h3 className="text-lg font-bold text-white mb-4">Course Objectives:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-brand-red/30 transition-colors">
                    <h4 className="text-brand-red font-bold text-sm uppercase tracking-wide mb-2">Administrative Skills</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Understand how to configure and manage the ServiceNow environment, including user management, data handling, notifications, and the Service Catalog.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-brand-orange/30 transition-colors">
                    <h4 className="text-brand-orange font-bold text-sm uppercase tracking-wide mb-2">Development Skills</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Gain proficiency in scripting, creating custom applications, developing workflows, and integrating with external systems.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-brand-red/30 transition-colors">
                    <h4 className="text-brand-red font-bold text-sm uppercase tracking-wide mb-2">Practical Experience</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Apply knowledge through hands-on labs, case studies, and real-world scenarios to reinforce learning and build practical skills.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Curriculum Modules */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-extrabold text-white mb-2">Detailed Curriculum</h2>
              <p className="text-slate-400 text-sm md:text-base mb-8">
                Six comprehensive modules balancing theoretical knowledge with extensive hands-on configuration and coding labs.
              </p>

              <div className="space-y-6">
                {syllabusModules.map((mod, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-brand-orange/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4 mb-6">
                      <span className="text-2xl font-mono font-extrabold text-brand-red bg-brand-red/10 px-3 py-1 rounded-xl border border-brand-red/20 shadow-sm shadow-brand-red/10 shrink-0">
                        {mod.num}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors">
                        {mod.title}
                      </h3>
                    </div>

                    <div className="space-y-6 pl-2">
                      {mod.sections.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0"></span>
                            {section.name}
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-400 pl-4 list-disc">
                            {section.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="hover:text-white transition-colors">{b}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Additional Resources */}
                <div className="p-6 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-brand-orange/30 transition-all duration-300">
                  <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4 mb-6">
                    <span className="text-xl font-mono font-extrabold text-brand-orange bg-brand-orange/10 px-3 py-1.5 rounded-xl border border-brand-orange/20 shadow-sm shrink-0">
                      +
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Additional Resources
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-2">
                    <div className="space-y-2">
                      <h4 className="text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></span>
                        Documentation and Support:
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-400 pl-4 space-y-1.5 list-disc">
                        <li>ServiceNow official documentation</li>
                        <li>Community forums and support channels</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-slate-200 font-semibold text-sm sm:text-base flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0"></span>
                        Best Practices:
                      </h4>
                      <ul className="text-xs sm:text-sm text-slate-400 pl-4 space-y-1.5 list-disc">
                        <li>Industry best practices for ServiceNow development</li>
                        <li>Tips from experienced administrators and developers</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.section>

          </div>

          {/* Right Column: Sticky Sidebar summary card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-orange/10 opacity-40 pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="border-b border-slate-800 pb-5">
                  <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">SPECIALIZED COURSE</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Course Summary</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" /> Duration
                    </span>
                    <span className="text-white font-semibold">6 Weeks (40+ Hours)</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-500" /> Mode
                    </span>
                    <span className="text-white font-semibold">Live Online Interactive</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Database className="w-4 h-4 text-slate-500" /> Sandbox Access
                    </span>
                    <span className="text-white font-semibold">24/7 Developer Instance</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" /> Placements
                    </span>
                    <span className="text-brand-orange font-semibold">100% Drive Support</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-slate-500" /> Certification
                    </span>
                    <span className="text-white font-semibold">CSA Exam Simulator</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button 
                    onClick={handleEnquireClick} 
                    className="w-full !bg-brand-orange hover:!bg-brand-red border-transparent text-white font-bold shadow-lg shadow-brand-orange/20 !py-4"
                  >
                    Enquire & Register Now <ArrowRight className="ml-2 w-5 h-5 shrink-0 text-white" />
                  </Button>

                  <button 
                    onClick={goHome}
                    className="w-full py-4 rounded-full border border-slate-700 bg-slate-950/40 text-slate-200 hover:text-white hover:border-brand-orange hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-sm font-semibold group"
                  >
                    <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:-translate-x-1 transition-transform" /> 
                    Back to Main Site
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
