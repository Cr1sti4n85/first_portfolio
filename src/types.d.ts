//navbar and mobile menu
type CallBack = (value: boolean) => boolean;

export type MenuProps = {
  menuOpen: boolean;
  setMenuOpen: (value: CallBack) => void;
};
