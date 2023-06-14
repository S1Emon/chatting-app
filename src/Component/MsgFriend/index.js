import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { activeChat } from "../../features/Slice/activeChatSlice";

const MsgFriend = () => {
  const [frnds, setFrnds] = useState([]);
  const db = getDatabase();
  const user = useSelector((users) => users.loginSlice.login);
  const dispatch = useDispatch();

  useEffect(() => {
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let frndArr = [];
      snapshot.forEach((item) => {
        if (
          user.uid === item.val().receiverid ||
          user.uid === item.val().senderid
        ) {
          frndArr.push({ ...item.val(), id: item.key });
        }
      });
      setFrnds(frndArr);
    });
  }, []);

  // Active single friends
  const handleActiveSingle = (item) => {
    if (item.receiverid === user.uid) {
      dispatch(
        activeChat({
          status: "single",
          id: item.senderid,
          name: item.sendername,
        })
      );
    } else {
      dispatch(
        activeChat({
          status: "single",
          id: item.receiverid,
          name: item.receivername,
        })
      );
    }
  };

  return (
    <>
      <div className="msg-friends">
        {frnds.map((item, i) => (
          <div
            className="msg-friends-wrapper"
            key={i}
            onClick={() => handleActiveSingle(item)}
          >
            <div className="msg-friends-image"></div>
            <div className="msg-friends-name">
              <h4>
                {user.uid === item.senderid
                  ? item.receivername
                  : item.sendername}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MsgFriend;
