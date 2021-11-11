import DisplayNavigation from '../DisplayNavigation/DisplayNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

export default function Appbar() {
  return (
    <header>
      <DisplayNavigation />
      <MobileNavigation />
    </header>
  );
}
