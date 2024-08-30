import ProfileImg from "../../../assets/pb.jpg";
import Layout from "../../../assets/Layout.png";
import Explore from "../../../assets/Explore.png";
import Bookmark from "../../../assets/Bookmark.png";
import Notification from "../../../assets/Notification.png";
import Play from "../../../assets/Play.png";
import Settings from "../../../assets/Settings-alt.png";
interface SidebarItemProps {
  href: string;
  src: string;
  alt: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ href, src, alt }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="sidebar-item"
  >
    <img src={src} alt={alt} className="sidebar-icon" />
  </a>
);

const SideBar = () => {
  const sidebarItems = [
    { href: "#", src: Layout, alt: "Layout Icon" },
    { href: "#", src: Explore, alt: "Explore Icon" },
    { href: "#", src: Bookmark, alt: "Bookmark Icon" },
    { href: "#", src: Notification, alt: "Notification Icon" },
    { href: "#", src: Play, alt: "Play Icon" },
    { href: "#", src: Settings, alt: "Settings Icon" },
  ];

  return (
    <div className="sidebar-container d-flex flex-column align-items-center">
      <img src={ProfileImg} alt="Profile" className="profile-img" />
      <div className="main-container d-flex flex-column">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
