import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from 'lenis/react'
import { useRef} from "react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

//   useGSAP(() => {
//     gsap.to(circle.current, { 
//       rotation: "+=360", 
//       duration: 5,
//       repeat: -1,
//       ease: "none",
//     });
//   },
//   { dependencies: [], scope: container } //Circle will only animate inside the scope of container. We then useEffect and pass dependency of [] to render on mount.
// ); 

  //enabling Lenis
  // const lenis = useLenis(({ scroll }) => {

  // })


    return (
      <ReactLenis root>
        <section id="vertical">
          <div className="container" ref={container}>
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
      </ReactLenis>
    )
}