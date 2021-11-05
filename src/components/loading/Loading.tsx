// Import React
import { Fragment, ReactElement } from 'react';

// Import Constants
import { LOADING_TYPES } from 'src/common/constants/loading/loadingTypes';

// Import Components
import Spin from 'src/components/spin/Spin';

// TODO
// import 'src/assets/styles/_loading.scss';

interface LoadingProps {
  loading: boolean;
  loadingType?: LOADING_TYPES;
  children?: ReactElement | JSX.Element;
}

function Loading(props: LoadingProps) {
  // Descturct Props
  const { loading, loadingType, children } = props;
  const setClassName = loading ? `show ${loadingType} loading-wrapper` : ` ${loadingType} loading-wrapper`;

  return (
    <Fragment>
      <div className={setClassName}>
        {loadingType === LOADING_TYPES.INLINE && <Spin spinning={loading}>{children}</Spin>}
        {loadingType === LOADING_TYPES.FULLSCREEN && loading && (
          <div className="epi-fixed-loader-container">
            <div id="mover1" className="dot"></div>
            <div id="mover2" className="dot"></div>
            <div id="mover3" className="dot"></div>
            <div id="mover4" className="dot"></div>
            <div id="mover5" className="dot"></div>
            <div id="mover6" className="dot"></div>
          </div>
        )}
      </div>
      {loadingType === LOADING_TYPES.FULLSCREEN && !loading && children}
    </Fragment>
  );
}

Loading.defaultProps = {
  loadingType: LOADING_TYPES.INLINE
};

export default Loading;
