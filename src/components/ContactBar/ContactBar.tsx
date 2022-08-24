import './ContactBar.scss';
import liIcon from '../../images/linkedIn-icon.svg';

export default function ContactBar() {
  return (
    <div className="ContactBar">
      <a 
        href="https://www.linkedin.com/in/efdal-yalcin/"
        target="_blank"
        rel="noreferrer"
        className="ContactBar__link"
      >
        <img 
          src={liIcon}
          alt="linkedIn icon"
          className="ContactBar__icon"
        />
      </a>
    </div>
  )
}
