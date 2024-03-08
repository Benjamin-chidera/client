import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

export const SideLoading = () => {
  return (
    <div>
      <Skeleton
        width={100}
        height={100}
        highlightColor="#f5f5f5"
        baseColor="#ebebeb"
        count={5}
        enableAnimation
      />
    </div>
  );
}
