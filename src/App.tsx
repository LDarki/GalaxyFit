import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/navbar";
import Smartband from "@/components/smartband";
import Footer from "@/components/footer";

import YellowSmartband from "@/assets/img/yellow-smartband.png";
import RedSmartband from "@/assets/img/red-smartband.png";
import StressSmartband from "@/assets/img/stress-smartband.png";
import HackSmartband from "@/assets/img/hack-smartband.png";
import SmartbandInfo from "@/assets/img/smartband.png";

import { FaCaretLeft, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

AOS.init();

const faqs = [
  {
    question:
      "What are the differences between samsung watch 6 / 6 classic and watch 5?",
    answer:
      "The Samsung Galaxy Watch 6 and 6 Classic have a number of differences from the Galaxy Watch 5, including a better processor, more RAM, and a new quick release button. The Watch 6 also has a new running track mode and personalized heart rate zones.",
  },
  {
    question:
      "What should i do when the left and the right volume levels of Buds Pro are different?",
    answer:
      "If your Galaxy Buds Pro have different volume levels between the left and right earbud, you should check the ´Left/right sound balance´ setting within the Galaxy Wearable app on your phone and adjust it to center; this setting allows you to balance the audio output between the two earbuds.",
  },
  {
    question: "How can i use Dual audio to share media on multiple devices?",
    answer:
      "To use dual audio to share media on multiple devices, you can pair your device with multiple Bluetooth devices and then play media on both devices simultaneously",
  },
  {
    question:
      "What to do when my Buds Pro noise control feature is not working properly?",
    answer:
      "If you don't wear the earbuds properly, they may not work. Try to wear the earbuds properly again so they fit tightly without space between your ear hole and the ear tip. Method 2. Make sure that the ear tips and the grooves of the earbuds are completely installed.",
  },
];

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    const update = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    if (scrollRef.current) {
      lenis.scrollTo(scrollRef.current, {
        offset: 0,
        duration: 1,
      });
    }

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef}>
      <Navbar />
      <section className="container" data-aos="fade-in">
        <article className="club">
          <p>Focus on your health with</p>
          <h1>Galaxy Club</h1>
          <p>
            Welcome to the world of [Your Brand Name] Smartwatches, where
            technology meets fashion.
          </p>
          <button style={{ marginTop: "4em" }}>Order Now</button>
        </article>
        <Smartband />
        <article className="smartband">
          <h1>
            G a l a x y F i t <br />2
          </h1>
          <p>
            The ultra slim fitness tracker with up to 21 days of battery life to
            optimize your fitness and sleep patterns.
          </p>
        </article>
      </section>
      <section className="selectorContainer">
        <span>
          <FaCaretLeft className="icon" />
          01
        </span>
        <span>
          02
          <FaCaretRight className="icon" />
        </span>
      </section>
      <section className="infoContainer">
        <h1 data-aos="fade-in">Build tough to keep up</h1>
        <p data-aos="fade-in">
          Push yourself that much further when setting your fitness goals,
          Galaxy Fit is compliant with military-level durability standards, and
          has water resistance of 5ATM. You can take your workout outside
          without having to worry about dust or rain getting in the way.
        </p>
        <img src={YellowSmartband} alt="Yellow Smartband" data-aos="fade-in" />
        <button data-aos="fade-in">Explore More</button>
      </section>
      <section className="info-1">
        <article data-aos="fade-right">
          <img src={RedSmartband} alt="Red Smartband" />
        </article>
        <article data-aos="fade-up">
          <h1>Take a positive step towards a stress-free life</h1>
          <p>
            Managing stress is an important part of staying healthy. both
            mentally and physically. Set up your Galaxi Fit2 with the Samsung
            Health app to automatically track your stress level, so you can
            practice breathing exercises when stress is high. Take a deep
            breath, and relax.
          </p>
          <button>Explore More</button>
        </article>
      </section>
      <section className="info-2">
        <article data-aos="fade-up">
          <h1>Beyond fitness tracking</h1>
          <p>
            No ordinary fitness tracker. Galaxy Fit keeps you informed by
            allowing you to reply instantly with preset messages for incoming
            texts. it syncs Do Not Disturb settings with your phone to keep you
            from interruptions, and even suggests roaming clock display when
            entering a new time zone.
          </p>
          <button>Explore More</button>
        </article>
        <article data-aos="fade-left">
          <img src={StressSmartband} alt="Stress Smartband" />
        </article>
      </section>
      <section className="info-3">
        <article data-aos="fade-right">
          <img src={HackSmartband} alt="Hack Smartband" />
        </article>
        <article data-aos="fade-up">
          <h1>Cool life hacks, right on your wrist</h1>
          <p>
            Galaxy Fit 2 pairs with your Galaxy smartphone to add a range of
            conveniences. It lets you check notifications and gives you quick
            responses you can use right from your wrist. You can even control
            the music on your mobile app, all without having to pick up your
            phone.
          </p>
          <button>Explore More</button>
        </article>
      </section>
      <section className="information" data-aos="fade-in">
        <img src={SmartbandInfo} alt="Smartband" />
        <article>
          <h1>Keep close while far</h1>
          <p>
            with Galaxy Fit 2's smart notifications you'll know who's trying to
            get in touch when your phone is connected. Now you don't have to
            have to worry about keeping in touch when calls are coming in, or
            events, or popping up on your calendar.
          </p>
          <button>Explore More</button>
        </article>
      </section>
      <section className="specifications">
        <h1 data-aos="fade-in">Specifications</h1>
        <div className="row">
          <article data-aos="fade-right">
            <p>Bluetooth Version</p>
            <h2>Bluetooth v5.1</h2>
          </article>
          <article data-aos="fade-up">
            <p>Sensors</p>
            <h2>
              Accelerometer, Gyro <br /> Sensor, Optical Heart <br />
              Rate Sensor
            </h2>
          </article>
          <article data-aos="fade-left">
            <p>Size (Main Display)</p>
            <h2>1.1'' (27.8mm)</h2>
          </article>
        </div>
        <button>Explore More</button>
      </section>
      <section className="faq">
        <h1 data-aos="fade-in">Frequently Asking Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-item" data-aos="fade-up">
                <div
                  className="faq-header"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <h3
                    className="faq-question"
                    style={isOpen ? { color: "#f9a825" } : {}}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FaCaretDown className="icon" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen
                      ? contentRefs.current[index]?.scrollHeight || "auto"
                      : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="faq-answer-wrapper"
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
