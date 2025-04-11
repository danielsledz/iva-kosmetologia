import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import LogoSVG from "../../assets/logo.svg";

import { useRouter } from "next/router";
import { Paths } from "../../constants/paths";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

function Nav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleClick = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [router]);

  return (
    <>
      {isMobileNavOpen && (
        <div className={styles.navMobile}>
          <div className={styles.navMobileTopBar}>
            <div
              onClick={handleLogoClick}
              className={styles.logoContainerMobile}
            >
              <Image
                layout="responsive"
                className={styles.logo}
                src={LogoSVG}
                alt="logo"
              />
            </div>

            <button onClick={handleClick} className={styles.closeButtonImg}>
              <GrClose size={35} color="black" />
            </button>
          </div>

          <div className={styles.anchorsMobileContainer}>
            {Paths.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={styles.anchorsMobile}
              >
                {item.name}
              </Link>
            ))}

            <div className={styles.socialIconsMobile}>
              <a
                href="https://www.facebook.com/IVA-kosmetologia-110403063893167/"
                target="_blank"
              >
                <FaFacebookF size={25} color="white" />
              </a>

              <a
                href="https://www.instagram.com/ivakosmetologia/"
                target="_blank"
              >
                <FaInstagram size={25} color="white" />
              </a>
            </div>
          </div>
        </div>
      )}

      <nav className={styles.nav}>
        <div onClick={handleLogoClick} className={styles.logoContainer}>
          <Image
            layout="responsive"
            className={styles.logo}
            src={LogoSVG}
            alt="logo"
          />
        </div>

        <div onClick={handleClick} className={styles.navBurger}>
          <VscThreeBars size={35} color="black" />
        </div>

        <div className={styles.anchors}>
          {Paths.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={router.pathname == item.path ? styles.active : ""}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className={styles.socialIcons}>
          <a
            className={styles.icon}
            href="https://www.facebook.com/IVA-kosmetologia-110403063893167/"
            target="_blank"
          >
            <FaFacebookF size={25} color="white" />
          </a>

          <a
            className={styles.icon}
            href="https://www.instagram.com/ivakosmetologia/"
            target="_blank"
          >
            <FaInstagram size={25} color="white" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
