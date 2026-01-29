import React from "react";
import type { Project } from "../types/models";

type DemoViewerProps = {
  title: Project["title"];
  demoUrl: NonNullable<Project["demoUrl"]>;
  onExit: () => void;
};

const DemoViewer: React.FC<DemoViewerProps> = ({ title, demoUrl, onExit }) => (
  <div
    className="fixed inset-0 z-[9999] bg-black/70 flex flex-col justify-start items-center"
    style={{ backdropFilter: "blur(4px)" }}
  >
    <div className="w-full flex justify-between items-center py-2 px-4 bg-background/95 border-b border-border shadow-lg fixed top-0 left-0 z-50">
      <span className="font-semibold text-primary">Demo: {title}</span>
      <button
        className="bg-primary px-4 py-1 rounded text-white shadow hover:bg-primary/90 transition"
        onClick={onExit}
      >
        Exit Demo
      </button>
    </div>
    <iframe
      title="Project Demo"
      src={demoUrl}
      className="w-full h-full mt-12"
      style={{ border: "none", height: "calc(100vh - 48px)" }}
      allow="autoplay; camera; microphone"
    />
  </div>
);

export default DemoViewer;
