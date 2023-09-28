import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer
      className={`${styles.footer} d-flex align-items-center justify-content-center text-center`}>
      <p> &copy; devTro {year} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
