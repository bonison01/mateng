import Link from "next/link";
import styles from './GlobalFooter.module.css';

export const Footer = ({ currentPage }: { currentPage?: string }) => {
  const instagram = process.env.INSTAGRAM_PAGE || "#";
  const facebook = process.env.FACEBOOK_PAGE || "#";
  const youtube = process.env.YOUTUBE_CHANNEL || "#";
  const linkedIn = process.env.LINKEDIN_PAGE || "#";

  return (
    <footer className={styles.footer}>
      <p>© 2024 Mateng</p>
      <nav>
        <a href="/about-us">About Us</a> | 
        <a href="/terms">Terms of Use</a> | 
        <a href="/careers">Careers</a>
      </nav>
    </footer>
  );
};
