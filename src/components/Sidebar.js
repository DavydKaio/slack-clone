import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import SIdebarOption from "./SIdebarOption";
import AppsIcon from "@mui/icons-material/Apps";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import InboxIcon from "@mui/icons-material/Inbox";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function Sidebar() {
  const [user] = useAuthState(auth);

  const [channels] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>DK LAB</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SIdebarOption Icon={InsertCommentIcon} title="Threads" />
      <SIdebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SIdebarOption Icon={DraftsIcon} title="Saved Items" />
      <SIdebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SIdebarOption Icon={PeopleAltIcon} title="People & User groups" />
      <SIdebarOption Icon={AppsIcon} title="Apps" />
      <SIdebarOption Icon={FileCopyIcon} title="File browser" />
      <SIdebarOption Icon={ExpandLessIcon} title="Show less" />

      <hr />
      <SIdebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SIdebarOption Icon={AddIcon} addChannelOption title="Add channel" />

      {channels?.docs.map((doc) => (
        <SIdebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-size: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
