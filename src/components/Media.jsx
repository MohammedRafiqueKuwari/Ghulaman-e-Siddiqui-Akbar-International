import React from 'react';

export default function Media() {
  return (
    <section id="media" className="min-h-screen pt-24 px-4 bg-white border-b">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#D4AF37]">Media</h2>
        <p className="text-gray-700 mb-8">Check out our latest video:</p>

        {/* Responsive YouTube Embed */}
        <div className="flex flex-wrap gap-4 justify-center">
  <iframe
    className="w-[300px] h-[200px] rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/videoseries?list=PL0bJ_NxC9Co2n5jHfhSJg4xTkAG3hobP_"
    title="YouTube Playlist 1"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <iframe
    className="w-[300px] h-[200px] rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/videoseries?list=PL0bJ_NxC9Co2F_te7aWqe9IwXewobt3LG"
    title="YouTube Playlist 2"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <iframe
    className="w-[300px] h-[200px] rounded-lg shadow-lg"
    src="https://www.youtube.com/embed/videoseries?list=PL0bJ_NxC9Co04Bzp2wS2df73YDLuN1fo-"
    title="YouTube Playlist 3"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>


          <iframe
             className="w-[300px] h-[200px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/PL0bJ_NxC9Co2n5jHfhSJg4xTkAG3hobP_"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
