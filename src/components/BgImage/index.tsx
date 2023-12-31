import { isDay } from '@/lib/utils';
import styles from './styles.module.css';
import { useLocationData } from '@/hooks/useLocationData';
import moment from 'moment';

type BgImageProps = {
  mobileBgDay: string;
  tabletBgDay: string;
  desktopBgDay: string;
  mobileBgNight: string;
  tabletBgNight: string;
  desktopBgNight: string;
  alt: string;
};

// const wideScreenMediaQuery = '(min-width: 1440px)';
const desktopMediaQuery = '(min-width: 769px)';
const tabletMediaQuery = '(min-width: 420px)';

const BgImage = ({
  mobileBgDay,
  tabletBgDay,
  desktopBgDay,
  mobileBgNight,
  tabletBgNight,
  desktopBgNight,
  alt,
}: BgImageProps) => {
  const timeData = useLocationData();
  const currentHour = moment(timeData?.dateTime).hour();
  const day = isDay(currentHour);

  return (
    <>
      <picture>
        <source
          media={desktopMediaQuery}
          srcSet={day ? desktopBgDay : desktopBgNight}
        />
        <source
          media={tabletMediaQuery}
          srcSet={day ? tabletBgDay : tabletBgNight}
        />
        <img
          className={styles.image}
          src={day ? mobileBgDay : mobileBgNight}
          alt={alt}
        />
      </picture>
    </>
  );
};

export default BgImage;
