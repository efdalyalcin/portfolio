import './Home.scss';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__info">
        <p>Hi, my name is</p>
        <h1 className="Home__name">Efdal YALCIN</h1>
        <h2 className="Home__developer">
          I am a <span className="Home__developer-span">FORNT-END DEVELOPER</span>
        </h2>
        <p>I build creative things for the WEB</p>
      </div>
      <div className="Home__image" />
    </div>
  );
}
