/** @format */
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import img from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faLanguage,
  faKeyboard,
  faCircleQuestion,
  faMessage,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/";

import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { UploadIcon } from "~/components/Icons";

import SearchInput from "../Search";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "Language",
          code: "en",
          title: "English",
        },
        {
          type: "Language",
          code: "vi",
          title: "VietNamese",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "FeedBack and Help",
    to: "/feedbback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard Shortcut",
  },
];

function Header() {
  const handleMenuChane = (menuItem) => {};

  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/feedbback",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coin",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={img.logo} alt="tiktok"></img>
          </Link>
        </div>

        <SearchInput />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx("btn-action")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <button className={cx("btn-action")}>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChane}
          >
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://yt3.ggpht.com/FqMybHw7iwFQolAPKRu1muyhI7Eunb2ixftZ9ZRP_kGArx1k0uwDUNcebKMxkO9TIfAEbr8nbQ=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              ></img>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
