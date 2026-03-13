
import Navbar from "./Navbar";
import FormSection from "./Login";
import AboutSection from "./AboutSection";
import StepsSection from "./AdmissionSteps";
import InstructionsSection from "./InstructionsSection";
import PlacementSection from "./PlacementSection";
import Footer from "./Footer";
import {
  UserPlus,
  MailCheck,
  FileText,
  CheckSquare,
  University
} from "lucide-react";

import { instruction } from "../../assets";
import { logo, tnea, NAAC, NBA, ISO, IQ,aboutvec} from "../../assets";

function Landing() {

  const extraImages = [NAAC, NBA, ISO, IQ];

  const programs = [
    "B.Tech",
    "B.E",
    "M.E",
    "MBA"
  ];

  const courses = [
    "Artificial Intelligence & Data Science",
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Electrical & Electronics Engineering"
  ];
  const stepsData = [
  {
    number: "01",
    title: "Register Yourself",
    icon: <UserPlus size={40}/>
  },
  {
    number: "02",
    title: "Verify Email",
    icon: <MailCheck size={40}/>
  },
  {
    number: "03",
    title: "Fill Application Form",
    icon: <FileText size={40}/>
  },
  {
    number: "04",
    title: "Submit Application",
    icon: <CheckSquare size={40}/>
  },
  {
    number: "05",
    title: "Visit the Campus",
    icon: <University size={40}/>
  }
];
  const instructionsList = [
  "The online application is for admission to programmes offered at Velammal Engineering College.",
  "Email ID submitted at the time of registration will be used for all correspondence until enrolment is completed. Email cannot be changed later.",
  "Applicants are advised to use the Velammal Engineering College Query Management System (QMS) for faster responses instead of email."
];

const instructionSteps = [
  {
    number: "1",
    text: "Register and verify your Email ID"
  },
  {
    number: "2",
    text: "Click on Any Queries? Ask Us in your dashboard"
  },
  {
    number: "3",
    text: "Select query category and submit your query"
  }
];

  return (
    <>
      <Navbar
        logo={logo}
        tnea={tnea}
        extraImages={extraImages}
        title="ADMISSION PORTAL"
      />

      <FormSection
        tneaImage={tnea}
        siteKey="0x4AAAAAACpwC8jw4RBLF4Ei"
        programs={programs}
        courses={courses}
        phoneNumber="+91 89392 21120"
        title="Admissions Open 2026"
      />

      <AboutSection
        tagline="A Journey of Thousand Miles Begins with a Single Step"
        title="Velammal Engineering College"
        subtitle="An Autonomous Institution"
        description1="The Velammal Educational Trust is a registered non-minority service organization established in the year 1986 by Thiru. M.V. Muthuramalingam. The trust inculcates among the youth a sense of discipline which is important to mold them into knowledgeable and skilled citizens. The watchwords of the Trust are Dedication, Determination, and Distinction."
        description2="Velammal Engineering College was established in 1995 to impart quality higher education. It is a self-financing non-minority institution affiliated to Anna University and approved by the All India Council for Technical Education (AICTE). The institution is also ISO-certified."
        image={aboutvec}
      />
      <StepsSection
        title="Admission Process"
        subtitle="Follow these steps to complete your admission application"
        steps={stepsData}
      />
      <InstructionsSection
        title="Instructions"
        subtitle="Please read the following instructions carefully before applying"
        image={instruction}
        instructions={instructionsList}
        steps={instructionSteps}
      />
      <PlacementSection />
      <Footer />
    </>
  );
}

export default Landing;