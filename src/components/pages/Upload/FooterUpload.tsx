export const SECTION_TYPE = {
  CREATE: 0,
  UPLOAD: 1
};

export function FooterUpload({
  updateIndex
}: {
  updateIndex: (index: number) => void;
}) {
  return (
    <footer className='footer-upload'>
      <button
        className='footer-button-create'
        onClick={() => updateIndex(SECTION_TYPE.CREATE)}
      >
        Create
      </button>
      <button
        className='footer-button-upload'
        onClick={() => updateIndex(SECTION_TYPE.UPLOAD)}
      >
        Upload
      </button>
    </footer>
  );
}
