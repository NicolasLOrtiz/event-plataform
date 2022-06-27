import React from "react";
import { useParams } from "react-router-dom";
import { Header, Sidebar, Video } from "../components";

export const Event = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
