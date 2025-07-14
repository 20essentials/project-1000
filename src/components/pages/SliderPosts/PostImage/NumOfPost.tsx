export function NumOfPost({
  arrayImagesLength,
  currentNumImage
}: {
  arrayImagesLength: number;
  currentNumImage: number;
}) {
  return (
    <output className='num-of-post'>
      {currentNumImage} / {arrayImagesLength}
    </output>
  );
}
