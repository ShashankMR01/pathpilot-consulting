"use client";

import Image from "next/image";
import FAQ from "./components/FAQ";
import { motion } from "framer-motion";
import AdmissionForm from "./components/AdmissionForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-black border-b border-yellow-500 p-5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          <a
            href="#home"
            className="text-2xl font-bold text-yellow-400"
          >
            PathPilot Consulting
          </a>

          <div className="hidden md:flex gap-8 text-white font-semibold">

            <a
              href="#home"
              className="hover:text-yellow-400 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-yellow-400 transition"
            >
              About
            </a>

            <a
              href="#vision"
              className="hover:text-yellow-400 transition"
            >
              Vision
            </a>

            <a
              href="#services"
              className="hover:text-yellow-400 transition"
            >
              Services
            </a>

            <a
              href="#faq"
              className="hover:text-yellow-400 transition"
            >
              FAQ
            </a>

            <a
              href="#apply"
              className="hover:text-yellow-400 transition"
            >
              Apply Now
            </a>

            <a
              href="#leadership"
              className="hover:text-yellow-400 transition"
            >
              Leadership
            </a>

            <a
              href="#contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>

          </div>

        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="bg-black text-white py-24 px-6 text-center fade-in"
      >

        <Image
          src="/logo.jpg"
          alt="PathPilot Logo"
          width={220}
          height={220}
          className="mx-auto rounded-full mb-8 border-4 border-yellow-500 float glow"
          priority
        />

        <h1 className="text-5xl md:text-7xl font-bold">
          PathPilot Consulting
        </h1>

        <p className="text-yellow-400 text-2xl mt-6 font-semibold">
          Guiding Paths, Creating Possibilities
        </p>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300">
          Professional guidance for PU Admissions,
          Engineering Admissions, Management Quota Admissions,
          Career Counseling and Study Abroad Support.
        </p>

        <a
          href="https://wa.me/919538942118"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold transition"
        >
          Get Free Consultation
        </a>

      </section>


      {/* ================= PARTNERS & SUPPORT ================= */}
      <section className="py-16 bg-slate-950 border-t border-yellow-500">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

          <div className="glass hover-card p-6 rounded-xl">
            <h3 className="text-5xl font-bold text-yellow-400">
              50+
            </h3>
            <p className="mt-3">
              Partner Colleges
            </p>
          </div>

          <div className="glass hover-card p-6 rounded-xl">
            <h3 className="text-5xl font-bold text-yellow-400">
              24/7
            </h3>
            <p className="mt-3">
              Support
            </p>
          </div>

        </div>

      </section>


      {/* ================= ABOUT PATHPILOT ================= */}
      <section
        id="about"
        className="py-24 px-6 bg-black border-t border-yellow-700"
      >

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
              About PathPilot
            </h2>

            <div className="max-w-4xl mx-auto text-center">

              <p className="text-lg text-gray-300 leading-8">
                PathPilot Consulting is a modern education and career
                guidance platform dedicated to helping students make
                informed academic decisions and achieve their future goals.
              </p>

              <p className="mt-6 text-lg text-gray-300 leading-8">
                We provide personalized guidance across PU Admissions,
                Engineering Admissions, Management Quota Guidance,
                Career Counseling and Study Abroad Support.
              </p>

              <p className="mt-6 text-lg text-gray-300 leading-8">
                Choosing the right college and course is one of the most
                important decisions in a student's life. PathPilot
                simplifies this journey through personalized counseling,
                admission guidance and long-term career planning support.
              </p>

            </div>


            {/* About Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

              <div className="glass hover-card p-6 rounded-xl border border-yellow-500">
                <h3 className="text-yellow-400 font-bold text-xl">
                  🎓 Student Focused
                </h3>
                <p className="text-gray-300 mt-3">
                  Guidance designed around each student's goals,
                  interests and aspirations.
                </p>
              </div>

              <div className="glass hover-card p-6 rounded-xl border border-yellow-500">
                <h3 className="text-yellow-400 font-bold text-xl">
                  🧭 Personalized Guidance
                </h3>
                <p className="text-gray-300 mt-3">
                  Helping students identify suitable academic and
                  career pathways.
                </p>
              </div>

              <div className="glass hover-card p-6 rounded-xl border border-yellow-500">
                <h3 className="text-yellow-400 font-bold text-xl">
                  🤝 Reliable Support
                </h3>
                <p className="text-gray-300 mt-3">
                  Dedicated support throughout the admission and
                  decision-making journey.
                </p>
              </div>

              <div className="glass hover-card p-6 rounded-xl border border-yellow-500">
                <h3 className="text-yellow-400 font-bold text-xl">
                  🌍 Future Focused
                </h3>
                <p className="text-gray-300 mt-3">
                  Supporting students in building strong academic
                  and professional pathways.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= OUR VISION ================= */}
      <section
        id="vision"
        className="bg-slate-950 py-24 px-6 border-t border-yellow-500"
      >

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-yellow-400 font-semibold tracking-widest uppercase">
              Our Vision
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mt-4">
              Building Better Futures
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-4xl mx-auto">
              To become one of India's most trusted education consulting
              organizations by empowering students with the right guidance,
              opportunities and support to build successful academic and
              professional careers.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="bg-black py-24 px-6 border-t border-yellow-500"
      >

        <div className="max-w-6xl mx-auto">

          <motion.h2
            className="text-5xl font-bold text-center text-yellow-400 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h2>


          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* PU Admissions */}
            <motion.div
              className="glass hover-card p-8 rounded-2xl border border-yellow-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >

              <div className="text-5xl mb-4">
                🎓
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                PU Admissions
              </h3>

              <p className="text-gray-300 leading-7">
                Personalized guidance for admissions into leading PU
                colleges, helping students choose the right stream and
                institution for their academic goals.
              </p>

            </motion.div>


            {/* Engineering Admissions */}
            <motion.div
              className="glass hover-card p-8 rounded-2xl border border-yellow-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >

              <div className="text-5xl mb-4">
                🏫
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Engineering Admissions
              </h3>

              <p className="text-gray-300 leading-7">
                Complete support for KCET, COMEDK and Management Quota
                admissions with expert college and branch selection
                guidance.
              </p>

            </motion.div>


            {/* Career Counseling */}
            <motion.div
              className="glass hover-card p-8 rounded-2xl border border-yellow-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >

              <div className="text-5xl mb-4">
                📈
              </div>

              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Career Counseling
              </h3>

              <p className="text-gray-300 leading-7">
                One-on-one counseling sessions to help students identify
                their strengths, interests and suitable career paths.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section id="faq">

        <FAQ />

      </section>


      {/* ================= APPLY / APPLICATION ================= */}
      <section
        id="apply"
        className="bg-slate-950 border-t border-yellow-500 py-20"
      >

        <div className="max-w-6xl mx-auto text-center mb-12 px-6">

          <h2 className="text-5xl font-bold text-yellow-400">
            Apply For Free Consultation
          </h2>

          <p className="text-gray-300 mt-6 text-lg max-w-3xl mx-auto">
            Take the first step towards your academic success.
            Fill out the form below and our team will contact you
            with personalized admission guidance and career counseling.
          </p>

        </div>

        <AdmissionForm />

      </section>


     {/* ================= LEADERSHIP ================= */}
<section
  id="leadership"
  className="bg-black py-24 px-6 border-t border-yellow-500"
>

  <div className="max-w-6xl mx-auto">

    {/* ================= LEADERSHIP HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >

      <p className="text-yellow-400 font-semibold tracking-widest uppercase">
        The People Behind PathPilot
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mt-4">
        Our Leadership Team
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
        Meet the people helping shape PathPilot Consulting and
        guide its journey forward.
      </p>

    </motion.div>


    {/* ================= FOUNDER ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* Founder Photo - Left */}
      <div className="flex justify-center">

        <Image
          src="/founderdirector.jpg"
          alt="Shashank Musturu Rammohan - Founder & Director"
          width={400}
          height={500}
          className="rounded-2xl shadow-2xl border-2 border-yellow-500 hover:scale-105 transition duration-500"
        />

      </div>


      {/* Founder Information - Right */}
      <div>

        <p className="text-yellow-400 font-semibold uppercase tracking-widest">
          Founder & Director
        </p>

        <h3 className="text-4xl md:text-5xl font-bold mt-3">
          Shashank Musturu Rammohan
        </h3>

        {/* Academic Background */}
        <div className="mt-5 border-l-4 border-yellow-500 pl-5">

          <p className="text-yellow-400 font-semibold text-lg">
            MSc Advanced Computer Science
          </p>

          <p className="text-gray-400 mt-1">
            University of Leicester, United Kingdom
          </p>

        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Currently pursuing an MSc in Advanced Computer Science at the
          University of Leicester, United Kingdom, Shashank brings together
          technology, education and entrepreneurship through PathPilot
          Consulting. As Founder & Director, his vision is to build a trusted,
          modern and student-first platform that helps students make informed
          academic and career decisions. He is focused on connecting students
          with the right opportunities, pathways and guidance to build a
          stronger future.
        </p>

        <div className="mt-8">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm font-semibold">
            Technology • Education • Entrepreneurship
          </span>

        </div>

      </div>

    </motion.div>


    {/* ================= DILIP B.L. ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* Dilip Information - Left */}
      <div className="md:order-1">

        <p className="text-yellow-400 font-semibold uppercase tracking-widest">
          Vice President & Chief Operating Officer
        </p>

        <h3 className="text-4xl md:text-5xl font-bold mt-3">
          Dilip B.L.
        </h3>

        {/* Academic Background */}
        <div className="mt-5 border-l-4 border-yellow-500 pl-5">

          <p className="text-yellow-400 font-semibold text-lg">
            Presidency University
          </p>

          <p className="text-gray-400 mt-1">
            Bangalore, India
          </p>

        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Dilip B.L. is a strong, highly motivated and driven professional
          who brings a focused approach to leadership, operations and
          organizational growth. As Vice President and Chief Operating
          Officer of PathPilot Consulting, he plays an important role in
          strengthening organizational operations, coordinating execution
          and supporting the company&apos;s strategic growth. His leadership
          is centered on building efficient systems, improving operational
          performance and turning ideas into meaningful outcomes. With a
          commitment to continuous improvement and purposeful execution,
          he contributes to building PathPilot into a trusted, structured
          and growth-oriented organization.
        </p>

        <div className="mt-8">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm font-semibold">
            Leadership • Operations • Growth
          </span>

        </div>

      </div>


      {/* Dilip Photo - Right */}
      <div className="flex justify-center md:justify-end md:order-2">

        <Image
          src="/mdcoo.jpg"
          alt="Dilip B.L. - Vice President & Chief Operating Officer"
          width={400}
          height={500}
          className="rounded-2xl shadow-2xl border-2 border-yellow-500 hover:scale-105 transition duration-500"
        />

      </div>

    </motion.div>


    {/* ================= CO-FOUNDER & CMO ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* Shreyas Information - Left */}
      <div className="md:order-1">

        <p className="text-yellow-400 font-semibold uppercase tracking-widest">
          Co-Founder & Chief Marketing Officer
        </p>

        <h3 className="text-4xl md:text-5xl font-bold mt-3">
          Shreyas R
        </h3>

        {/* Academic Background */}
        <div className="mt-5 border-l-4 border-yellow-500 pl-5">

          <p className="text-yellow-400 font-semibold text-lg">
            B.Com Graduate
          </p>

          <p className="text-gray-400 mt-1">
            Bangalore, India
          </p>

        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          As the Co-Founder and Chief Marketing Officer of PathPilot
          Consulting, Shreyas R plays an important role in shaping the
          organization&apos;s marketing direction, brand presence and
          communication strategy. His responsibilities include supporting
          marketing initiatives, strengthening the PathPilot brand and
          expanding its outreach. With a background in commerce, Shreyas
          brings a business-oriented perspective to marketing and brand
          development.
        </p>

        <div className="mt-8">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm font-semibold">
            Marketing • Branding • Growth
          </span>

        </div>

      </div>


      {/* Shreyas Photo - Right */}
      <div className="flex justify-center md:justify-end md:order-2">

        <Image
          src="/cmo.jpg"
          alt="Shreyas R - Co-Founder & Chief Marketing Officer"
          width={400}
          height={500}
          className="rounded-2xl shadow-2xl border-2 border-yellow-500 hover:scale-105 transition duration-500"
        />

      </div>

    </motion.div>


    {/* ================= CFO ================= */}
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center mb-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      {/* Harshini Photo - Left */}
      <div className="flex justify-center md:justify-start md:order-1">

        <Image
          src="/cfo.jpg"
          alt="Harshini M. R - Chief Financial Officer"
          width={400}
          height={500}
          className="rounded-2xl shadow-2xl border-2 border-yellow-500 hover:scale-105 transition duration-500"
        />

      </div>


      {/* Harshini Information - Right */}
      <div className="md:order-2">

        <p className="text-yellow-400 font-semibold uppercase tracking-widest">
          Chief Financial Officer
        </p>

        <h3 className="text-4xl md:text-5xl font-bold mt-3">
          Harshini M. R
        </h3>

        {/* Academic Background */}
        <div className="mt-5 border-l-4 border-yellow-500 pl-5">

          <p className="text-yellow-400 font-semibold text-lg">
            B.Com – Finance & Accounting
          </p>

          <p className="text-gray-400 mt-1">
            Presidency University, Bangalore
          </p>

        </div>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          Harshini M. R holds a Bachelor of Commerce degree specializing
          in Finance and Accounting from Presidency University, Bangalore.
          As Chief Financial Officer, she oversees financial planning,
          budgeting and financial operations at PathPilot Consulting.
          She brings a structured approach to financial management and
          supports responsible decision-making as the organization grows.
          Her focus is on building strong financial practices that
          contribute to PathPilot&apos;s long-term sustainability and growth.
        </p>

        <div className="mt-8">

          <span className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm font-semibold">
            Finance • Planning • Sustainability
          </span>

        </div>

      </div>

    </motion.div>


    {/* ================= FUTURE LEADERSHIP ================= */}
    <div className="mt-8 text-center">

      <p className="text-gray-500 text-sm">
        PathPilot&apos;s leadership team will continue to grow as the
        organization expands.
      </p>

    </div>

  </div>

</section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-black text-white py-20 text-center border-t border-yellow-500"
      >

        <h2 className="text-5xl font-bold text-yellow-400">
          Contact PathPilot Consulting
        </h2>

        <p className="mt-8 text-xl">
          📱 WhatsApp: +91 9538942118
        </p>

        <p className="mt-3 text-xl">
          📧 pathpilotconsultingofficial@gmail.com
        </p>

        <p className="mt-3 text-xl">
          📸 Instagram: @pathpilotconsulting.official
        </p>

        <p className="mt-3 text-xl">
          🌐 Website: pathpilot-consulting.vercel.app
        </p>


        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://wa.me/919538942118"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold"
          >
            WhatsApp Us
          </a>

          <a
            href="mailto:pathpilotconsultingofficial@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold"
          >
            Email Us
          </a>

          <a
            href="https://instagram.com/pathpilotconsulting.official"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-bold"
          >
            Follow on Instagram
          </a>

        </div>


        <div className="mt-12 max-w-4xl mx-auto px-6">

          <h3 className="text-2xl font-bold text-yellow-400 mb-4">
            Why Choose PathPilot?
          </h3>

          <div className="grid md:grid-cols-4 gap-4 text-center">

            <div className="bg-slate-900 p-4 rounded-lg border border-yellow-500">
              🎓
              <br />
              Expert Guidance
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-yellow-500">
              🏫
              <br />
              Top Colleges
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-yellow-500">
              🌍
              <br />
              Study Abroad
            </div>

            <div className="bg-slate-900 p-4 rounded-lg border border-yellow-500">
              📈
              <br />
              Career Planning
            </div>

          </div>

        </div>


        <p className="mt-12 text-gray-400">
          © 2026 PathPilot Consulting. All Rights Reserved.
        </p>

      </section>


      {/* ================= FLOATING CONTACT BUTTONS ================= */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">

        <a
          href="https://wa.me/919538942118"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-5 py-3 rounded-full shadow-xl"
        >
          WhatsApp
        </a>

        <a
          href="mailto:pathpilotconsultingofficial@gmail.com"
          className="bg-yellow-500 text-black px-5 py-3 rounded-full shadow-xl"
        >
          Email
        </a>

      </div>


      {/* ================= BACK TO TOP ================= */}
      <a
        href="#home"
        className="fixed bottom-35 right-5 bg-yellow-500 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-xl z-50"
      >
        ↑
      </a>

    </main>
  );
}