import { useCurrentPage } from '@/store/useCurrentPage';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useLastPagedVisited } from '@/store/userLastPageVisited';

export function CloseX({ className }: { className: string }) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const getPenultimatePage = useLastPagedVisited(
    state => state.getPenultimatePage
  );
  const resetLimit = useLimitOfPost(st => st.resetLimit)

  function goToHome() {
    setCurrentPage(getPenultimatePage());
    resetLimit();
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
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
