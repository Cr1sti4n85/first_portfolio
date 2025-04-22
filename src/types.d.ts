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

//smooth scrolling props
export type ScrollProps = {
  children: React.ReactNode;
};

//Form content
export type FormContent = {
  name: string;
  email: string;
  message: string;
};
