import { Card } from "../components/Card";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import styles from "../styles/Home.module.scss";

interface Courses {
  uuid: string;
  name: string;
  price: string;
}

interface CoursesProps {
  courses: Courses[];
}

export default function Home({ courses }: CoursesProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {courses.map((value) => (
          <Card
            key={value.uuid}
            name={value.name}
            price={value.price}
            uuid={value.uuid}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/courses");

  return {
    props: {
      courses: response.data,
    },
  };
};
