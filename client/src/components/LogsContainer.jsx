import React from "react";
import LogsCard from "./LogsCards";
import { useSelector } from "react-redux";

const LogsContainer = () => {
  const logs = useSelector((state) => state.log.arr);

  const logDisplay = logs.map((l) => <LogsCard key={l.id} log={l} />);

  return <>{logDisplay}</>;
};

export default LogsContainer;
