import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <p> &copy; devTro {year} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
