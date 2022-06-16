import Image from 'next/image';
import styles from '../../styles/components/game/Cover.module.scss';

const getImage = (imageData) => {
  let image = '';
  const { src, alt, className } = imageData;
  if (src) {
    image = (
      <Image
        alt={alt}
        className={className}
        height='100vw'
        layout='responsive'
        src={src}
        width='100vw'
      />
    );
  }
  return image;
};

const Cover = (props) => {
  const classes = `${styles['cover']} ${props.className}`;

  const imageData = {
    src: props.src,
    alt: props.alt,
    className: classes,
  };
  let image = getImage(imageData);

  return <div className={styles['cover-background']}>{image}</div>;
};

export default Cover;
