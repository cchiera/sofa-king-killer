"use client";

import { useState, useEffect, MouseEvent } from "react";
import "./YouTubeGallery.css";
import { Video } from "./types";

interface VideoCardProps {
  video: Video;
  onClick: (video: Video) => void;
  index: number;
}

interface ModalProps {
  video: Video;
  onClose: () => void;
}

interface YouTubeGalleryProps {
  videos: Video[];
}

function VideoCard({ video, onClick, index }: VideoCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  return (
    <div
      className="video-card"
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={() => onClick(video)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="thumbnail-wrap">
        <img
          src={
            imgError
              ? `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
              : video.thumbnail
          }
          alt={video.title}
          className="thumbnail"
          onError={() => setImgError(true)}
        />
        <div className={`overlay ${hovered ? "visible" : ""}`}>
          <div className="play-btn">▶</div>
        </div>
        <span className="duration-badge">{video.duration}</span>
      </div>

      <div className="card-info">
        <div className="avatar">{video.channel[0].toUpperCase()}</div>
        <div className="meta">
          <p className="video-title">{video.title}</p>
          <p className="channel-name">{video.channel}</p>
          <p className="subinfo">
            {video.views} · {video.date}
          </p>
        </div>
      </div>
    </div>
  );
}

function Modal({ video, onClose }: ModalProps) {
  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-player">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <div className="modal-info">
          <h2 className="modal-title">{video.title}</h2>
          <p className="modal-sub">
            {video.channel} · {video.views} · {video.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function YouTubeGallery({ videos }: YouTubeGalleryProps) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="app">
        <div className="grid">
          {videos.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {activeVideo && (
        <Modal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}
