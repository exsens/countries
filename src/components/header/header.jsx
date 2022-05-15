import Logo from '../logo/logo';
import { ReactComponent as SwitcherSvg } from '../../icons/moon.svg';

import './header.scss';

const header = (props) => {
  const {
    toggleTheme,
    theme,
  } = props;

  return (
    <header className="header">
      <div className="container header__container">
        <Logo className={'header__logo'} />
        <button
          className="header__switcher"
          aria-label="Change theme color"
          onClick={() => toggleTheme()}
        >
          {theme === 'light' ?
            <>
              <SwitcherSvg fill="#000000" />
              <span>Dark mode</span>
            </> :
            <>
              <SwitcherSvg fill="#ffffff" />
              <span>Light mode</span>
            </>}

        </button>
      </div>
    </header>
  );
};

export default header;