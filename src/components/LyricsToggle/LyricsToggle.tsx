"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./LyricsToggle.module.css";

type LyricsToggleProps = {
  lyrics: string;
};

export default function LyricsToggle({ lyrics }: LyricsToggleProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.trigger} onClick={() => setOpen(true)}>
        lyrics
      </button>
      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                className={styles.close}
                onClick={() => setOpen(false)}
                aria-label="Close lyrics"
              >
                ✕
              </button>
              <div
                className={styles.lyrics}
                dangerouslySetInnerHTML={{ __html: lyrics }}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
