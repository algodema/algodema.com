import styles from "./index.module.css";
function ContentLayout(props) {
  return <div className={styles.container}>{props.children}</div>;
}

export default ContentLayout;
