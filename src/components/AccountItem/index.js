/** @format */

import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/846fcb89fd967971b70d63798bce8a03.jpeg?x-expires=1694376000&x-signature=ioILEMTSWxafgn9KBAJAbdHLbcw%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>ABC</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>DEF</span>
      </div>
    </div>
  );
}

export default AccountItem;
