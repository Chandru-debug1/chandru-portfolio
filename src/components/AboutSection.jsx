import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Entry-Level Data Scientist & Data Analyst
            </h3>

            <p className="text-muted-foreground">
              I am an entry-level Data Scientist and Data Analyst with hands-on
              experience in <strong>Machine Learning</strong>, <strong>Deep Learning</strong>,
              <strong> Natural Language Processing (NLP)</strong>, <strong>SQL</strong>, and <strong>Generative AI</strong>. I enjoy transforming raw data into meaningful
              insights and intelligent solutions.
            </p>

            <p className="text-muted-foreground">
              I have worked on AI-driven applications, predictive models, and
              intelligent systems using  <strong>Python</strong>,  <strong>Power BI</strong>, and <strong>modern ML & DL
              frameworks</strong>. My interests include <strong>feature engineering</strong>, <strong>model
              evaluation</strong>, <strong>NLP-based text analysis</strong>, and <strong>delivering data-driven</strong>
              insights that support business decision-making.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Chan_Data_Scientist_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Machine Learning, Deep Learning & AI
                  </h4>
                  <p className="text-muted-foreground">
                    Building predictive models and AI-powered applications
                    using Machine Learning, Deep Learning, Neural Networks,
                    and Generative AI techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Natural Language Processing & Analytics
                  </h4>
                  <p className="text-muted-foreground">
                    Working with NLP techniques such as text preprocessing,
                    sentiment analysis, text classification, and transformer-
                    based models for real-world language understanding tasks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Real-World Project & Internship Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Hands-on experience building end-to-end data science
                    pipelines, NLP-powered systems, and cloud-enabled AI
                    solutions through internships and industry projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
