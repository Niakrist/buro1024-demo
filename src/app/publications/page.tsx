import { Button, Container, Htag, Text } from '@/ui';
import { Publication } from '@/components';
import { PUBLICATIONS_DATA } from '@/data';
import styles from './page.module.css';

export default function PublicationsPage() {
  return (
    <>
      <Container>
        <Htag hidden color="black" size="big" tag="h1">
          Публикации
        </Htag>
        <Publication
          publication={PUBLICATIONS_DATA[0]}
          type="big"
          buttonName="Читать полностью"
        />
      </Container>

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Publication
            publication={PUBLICATIONS_DATA[1]}
            type="medium"
            buttonName="Читать полностью"
          />
          <div>
            <Publication
              publication={PUBLICATIONS_DATA[2]}
              type="small"
              className={styles.mb80}
              buttonName="Читать статью "
            />
            <Publication
              publication={PUBLICATIONS_DATA[3]}
              type="small"
              className={styles.mb80}
              buttonName="Электронная версия"
            />
          </div>
        </div>
      </div>
      <Container className={styles.journal}>
        <div>
          <img
            className={styles.journalImg}
            src={PUBLICATIONS_DATA[4].img}
            alt={PUBLICATIONS_DATA[4].title}
          />
          <img
            className={styles.journalImg}
            src={PUBLICATIONS_DATA[4].images[0]}
            alt={PUBLICATIONS_DATA[4].title}
          />
          <img
            className={styles.journalImg}
            src={PUBLICATIONS_DATA[4].images[1]}
            alt={PUBLICATIONS_DATA[4].title}
          />
        </div>
        <div>
          <Htag color="black" tag="h2" size="medium" className={styles.mb16}>
            {PUBLICATIONS_DATA[4].title}
          </Htag>
          <Text size="medium" color="black" className={styles.mb32}>
            {PUBLICATIONS_DATA[4].description}
          </Text>
          <Button
            size="small"
            bg="black"
            color="white"
            href={`publications/${PUBLICATIONS_DATA[4].url}`}
          >
            Электронная версия
          </Button>
        </div>
      </Container>
    </>
  );
}
