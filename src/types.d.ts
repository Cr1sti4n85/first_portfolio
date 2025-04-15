//navbar and mobile menu
type CallBack = (value: boolean) => boolean;

export type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: CallBack) => void;
};

//Loading screen
export type LoadingScreenProps = {
  onComplete: () => void;
};
