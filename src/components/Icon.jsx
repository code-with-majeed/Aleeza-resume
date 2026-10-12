import React from "react";
import {
  FiAlertOctagon, FiGitMerge, FiEdit3, FiTool, FiEye, FiClock, FiCpu, FiUsers,
} from "react-icons/fi";

const map = {
  bug: FiAlertOctagon,
  process: FiGitMerge,
  write: FiEdit3,
  puzzle: FiTool,
  eye: FiEye,
  clock: FiClock,
  brain: FiCpu,
  users: FiUsers,
};

const Icon = ({ name, className = "" }) => {
  const C = map[name] || FiTool;
  return <C className={className} />;
};

export default Icon;
