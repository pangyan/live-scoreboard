import classes from "./footer.module.scss";
import packageJson from '../../../package.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className={classes.footer} data-cy="footer">
        <ul>
          <li className={classes.footerCopyrights}>
            © {packageJson.author} {currentYear}. All rights reserved.
          </li>
          <li>
            <div className={classes.version}>v.{packageJson.version}</div>
          </li>
        </ul>
      </footer>
  );
};
export default Footer;