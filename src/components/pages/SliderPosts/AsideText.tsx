import { useState } from 'react';

export function AsideText({
  username,
  description,
  tags,
  ref
}: {
  username: string;
  description?: string;
  tags?: string[];
  ref: React.RefObject<HTMLElement | null>;
}) {
  const [showDescription, setShowDescription] = useState(false);
  const className = `aside-text-and-description `;

  if (ref) {
    ref.current?.classList.toggle('showBackgroundBlackInText', showDescription);
  }

  return (
    <section className={className}>
      <p onClick={() => setShowDescription(!showDescription)}>@{username}</p>
      {showDescription && description && (
        <p onClick={() => setShowDescription(!showDescription)}>{description}</p>
      )}
      {showDescription && tags && (
        <p className='paragraph-text' onClick={() => setShowDescription(!showDescription)}>
          {tags.map((word, i) => (
            <span key={`letter-${i}`}>#{word}&nbsp;</span>
          ))}
        </p>
      )}
    </section>
  );
}
