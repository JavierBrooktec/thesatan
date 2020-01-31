import Header from '../components/Header';
import Layout from '../components/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout>
      <Header></Header>
      <div className={'content'}>
        <section className={`${styles.news} ${styles.section}`}>
          
        </section>
      </div>
    </Layout>
  );
}
