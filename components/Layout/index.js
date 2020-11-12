import styles from './styles.module.scss';

export default function Layout({ children }) {
  return <div className={styles.containerApp}>{children}</div>;
}
