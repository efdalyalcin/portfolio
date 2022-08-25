import './ContactBar.scss';

export default function ContactBar() {
  return (
    <div className="ContactBar">
      <a 
        href="https://www.linkedin.com/in/efdal-yalcin/"
        target="_blank"
        rel="noreferrer"
        className="ContactBar__link"
      >
        <button className="ContactBar__icon ContactBar__icon--linkedIn" />
      </a>
      <a 
        href="https://wa.me/+905335500869/?text=myText"
        target="_blank"
        rel="noreferrer"
        className="ContactBar__link"
      >
        <button className="ContactBar__icon ContactBar__icon--whatsApp" />
      </a>
    </div>
  )
}
