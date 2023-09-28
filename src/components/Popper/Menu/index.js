/** @format */

import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderIetms = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <div>
      <Tippy
        interactive
        placement="bottom-end"
        render={(attrs) => (
          <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              {renderIetms()}
            </PopperWrapper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Menu;
