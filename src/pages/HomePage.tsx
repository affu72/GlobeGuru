import PageNav from "../components/PageNav";
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={`${styles.homepage}`}>
      <PageNav />
      <div className={styles.hero}>
        <div className={`${styles.heading}`}>
          <h1>
            You travel the world.<br/><span>GlobeGuru</span> keeps track of your
            adventures.
          </h1>
          <p className="desc">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
        </div>
        <div className={styles.cta}>
          <button className="btn">start tracking now</button>
        </div>
      </div>
    </div>
  );
}
