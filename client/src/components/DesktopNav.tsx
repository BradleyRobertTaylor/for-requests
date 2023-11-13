import Logo from './Logo';

function DesktopNav() {
  return (
    <nav>
      <div className="flex gap-3">
        <Logo className="w-24" />
        <span className="text-lg self-end">
          For
          <br />
          Requests
        </span>
      </div>
    </nav>
  );
}

export default DesktopNav;
