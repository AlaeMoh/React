"use client"
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/carousel.css"
interface TrailerModalProps {
  trailerKey: string | null;
}

export default function Trailor({ trailerKey }: TrailerModalProps) {
  const [video, setVideo] = useState(false);

  const handleClose = () => setVideo(false);
  const handleOpen = () => setVideo(true);

  return (
    <>
      {/* Button to open modal */}
      <Button className="bg-purple btn btn-lg px-4 shadow" onClick={handleOpen}>
        🎬 Watch Trailer
      </Button>

      {/* Modal Popup */}
      <Modal show={video} onHide={handleClose} centered size="lg" >
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title className="text-white text-center">Movie Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center bg-dark">
          {trailerKey ? (
            <iframe
              width="100%"
              height="400"
              src={trailerKey}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>No trailer available.</p>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
