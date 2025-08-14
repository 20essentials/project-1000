import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useLimitOfPost } from '@/store/useLimitOfPosts';

export function CloseStory({ className }: { className: string }) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const resetLimit = useLimitOfPost(st => st.resetLimit);

  function goToHome() {
    setCurrentPage(IS_ACTIVE_BUTTON.INBOX);
    resetLimit();
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`${className} isClickableInDrag`}
      onClick={goToHome}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  );
}
