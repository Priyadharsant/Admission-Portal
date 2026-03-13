import styles from "./Footer.module.css";
import vecLogo from "../../assets/logo.png";

import {
  Instagram,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

function Footer() {

  return (
    <footer className={styles.footer}>

      {/* Yellow Shapes */}
      <div className={styles.leftShape}></div>
      <div className={styles.rightShape}></div>

      <div className={styles.container}>

        {/* Brand */}

        <div className={styles.brand}>

          <img src={vecLogo} alt="Velammal Engineering College"/>

          <h3>VELAMMAL</h3>
          <h3>ENGINEERING COLLEGE</h3>

          <p>The wheel of Knowledge rolls on!</p>
          <p>(An Autonomous Institution)</p>

        </div>


        {/* Contact */}

        <div className={styles.contact}>

          <h2>Contact Address</h2>

          <p>
            Velammal Engineering College (Autonomous)<br/>
            (Unit of Velammal Educational Trust),<br/>
            Ambattur Red-hills Road, Surapet,<br/>
            Chennai – 600 066. Tamil Nadu, India.
          </p>

          <p><strong>Contact:</strong> 044 26590758</p>
          <p><strong>Student Affair:</strong> 044 26591771</p>
          <p><strong>Admissions:</strong> 9123547550 , 8939221120</p>

          <div className={styles.links}>
            <a href="#">Privacy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>


        {/* Social */}

        <div className={styles.social}>

          <h4>Follow Us</h4>

          <div className={styles.icons}>

            <a href="#"><Instagram size={20} color="White"/></a>
            <a href="#"><Linkedin size={20} color="White"/></a>
            <a href="#"><Twitter size={20} color="White"/></a>
            <a href="#"><Facebook size={20} color="White"/></a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className={styles.bottom}>
       <a className={styles.weblink} href="https://velammal.edu.in/webteam"><span> © WebOps VEC</span></a>, Velammal Engineering College, Chennai
      </div>

    </footer>
  );
}

export default Footer;