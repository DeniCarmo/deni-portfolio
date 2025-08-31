import logo from '@/assets/img/deni-logo.png';

function HeaderLogo () {
  return (
    <a href="/">
      <img src={logo} className="w-[35px] h-[35px]" alt="Deni Carmo, Front-end Developer" title="Deni Carmo, Front-end Developer" />
    </a>
  );
}

export default HeaderLogo;