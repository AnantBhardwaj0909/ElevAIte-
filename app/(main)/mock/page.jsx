"use client";
import { useEffect, useRef } from "react";

export default function MockInterviewer() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access denied:", err);
      }
    }

    enableCamera();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Mock Interviewer</h1>
      <video ref={videoRef} autoPlay playsInline className="w-full max-w-md rounded-xl shadow-lg" />
    </div>
  );
}
