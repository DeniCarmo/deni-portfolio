import HeaderLogo from "./header/logo";

function Header () {
  return (
    <header className="w-full max-w-[1366px] h-auto min-h-[50px] bg-white fixed top-0 inset-x-0 mx-auto z-20 flex items-center justify-center rounded-lg sm:px-2 px-4">
      <div className="w-full max-w-[1366px] flex items-center justify-between">
        <HeaderLogo />
      </div>
    </header>
  );
}

export default Header;