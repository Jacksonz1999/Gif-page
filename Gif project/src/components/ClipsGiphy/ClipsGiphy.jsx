import React, { useEffect, useState } from "react";
import "./ClipsGiphy.css";

const ClipsGiphy = ({ giphyArray }) => {
  const [giphys, setGiphys] = useState([]);

  const randomizeData = (giphyArray) => {
    return giphyArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    let randomData = randomizeData(giphyArray);
    setGiphys(randomData.slice(0, 3));
  }, [giphyArray]);

  return (
    <div className="clips_giphy">
      {giphys && giphys.length ? (
        <>
          <div className="first_section">
            <img
              className="first_section_img"
              src={giphys?.[0]?.images.downsized.url}
            />
            <p>
              <img
                className="avatar_image"
                src={giphys?.[0]?.user.avatar_url}
              />
              {giphys?.[0].title}
            </p>
          </div>
          <div className="second_section">
            <img
              className="second_section_img "
              src={giphys?.[1]?.images.downsized.url}
            />
            <p>
              <img
                className="avatar_image"
                src={giphys?.[1]?.user.avatar_url}
              />
              {giphys?.[1].title}
            </p>
            <img
              className="second_section_img "
              src={giphys?.[2]?.images.downsized.url}
            />
            <p>
              <img
                className="avatar_image"
                src={giphys?.[2]?.user.avatar_url}
              />
              {giphys?.[2].title}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ClipsGiphy;
