import { useCurrentPage, IS_ACTIVE_BUTTON } from '@/store/useCurrentPage';
import { useLimitOfPost } from '@/store/useLimitOfPosts';
import { useLastPagedVisited } from '@/store/userLastPageVisited';

export function ArrowLeft({ className }: { className: string }) {
  const setCurrentPage = useCurrentPage(state => state.setCurrentPage);
  const resetLimit = useLimitOfPost(state => state.resetLimit);
  const getPenultimatePage = useLastPagedVisited(
    state => state.getPenultimatePage
  );

  function goToHome() {
    setCurrentPage(getPenultimatePage());
    resetLimit();
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      className={className}
      onClick={goToHome}
    >
      <path
        fill='currentColor'
        d='m5.83 9l5.58-5.58L10 2l-8 8l8 8l1.41-1.41L5.83 11H18V9z'
      />
    </svg>
  );
}
