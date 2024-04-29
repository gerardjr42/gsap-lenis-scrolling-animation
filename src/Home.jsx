import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
// console.log(ScrollTrigger)

export default function Home() {
  const lenisRef = useRef()
  const horizontalRef = useRef()
  
  // enabling Lenis
  useLenis(() => {
      ScrollTrigger.refresh()
    })

    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
        // ScrollTrigger.refresh()
      }
      gsap.ticker.add(update);
      return () => {
        gsap.ticker.remove(update)
      }
    }, [])

  //GSAP animation for vertical section
  useGSAP(() => {
    const timeln = gsap.timeline({ paused: true });
    timeln.fromTo(".col_left", { y: 0 }, { y: '170vh', duration: 1, ease: 'none' });

    ScrollTrigger.create({
      animation: timeln,
      trigger: "#vertical",
      start: 'top top',
      end: 'bottom center',
      scrub: true,
    });
  }, { dependencies: [], revertOnUpdate: true });

  //GSAP animation for horizontal section
  useGSAP(() => {
    let boxItems = gsap.utils.toArray(".horizontal__item");

    gsap.to(boxItems, {
      xPercent: -50 * (boxItems.length -1),
      ease: "sine.out",
      scrollTrigger: {
        trigger: horizontalRef.current,
        pin: true,
        scrub: 3,
        snap: 1 / (boxItems.length -1),
        end: `+=${horizontalRef.current.offsetWidth}`,
      }
    });
  }, []);



    return (
      <ReactLenis ref={lenisRef} autoRaf={false} root>
        <section id="vertical">
          <div className="container">
            <div className="vertical__content">
              <div className="col col_left">
                <h2 className="vertical__heading"><span>About</span><span>Pursuit</span><span>Tutoring</span></h2>
              </div>
              <div className="col col_right">
                <div className="vetical__item">
                  <h3>What is Pursuit Tutoring?</h3>
                  <p>Pursuit Tutoring serves as your gateway to accessing the assistance required to unleash your potential as an aspiring developer. Our platform facilitates the connection between tutors and learners, providing the support needed for growth and development.</p>
                </div>
                <div className="vetical__item">
                  <h3>Why Pursuit Tutoring?</h3>
                  <p>As lifelong learners, we harness the resources available to acquire new skills and knowledge. However, as Pursuit Fellows and developers, we are privileged to grow together through a shared passion for coding. Accessing personalized guidance on specific skills, topics, or concepts from experienced individuals enhances the efficiency and effectiveness of our learning journey. Furthermore, we saw an opportunity to help fellows leverage the power of relationships and networkng</p>
                </div>
                <div className="vetical__item">
                  <h3>How to book a session</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, obcaecati? Corporis quos officia mollitia blanditiis, tempore consequatur quasi cupiditate nesciunt. Nulla consectetur magni praesentium doloremque qui deserunt, veritatis exercitationem provident?</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="horizontal" ref={horizontalRef}>
          <div className="container">
            <div className="horizontal__content">
              <div className="horizontal__item">
                <div className="horizontal__num">1</div>
              </div>
              <div className="horizontal__item">
                <div className="horizontal__num">2</div>
              </div>
              <div className="horizontal__item">
                <div className="horizontal__num">3</div>
              </div>
              <div className="horizontal__item">
                <div className="horizontal__num">4</div>
              </div>
              <div className="horizontal__item">
                <div className="horizontal__num">5</div>
              </div>
            </div>
          </div>
        </section>
      </ReactLenis>
    )
}