import React, { useEffect, useState } from "react";
import { fetchSearchGiphys, fetchTrendingGiphys } from "../../api/giphyapi";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import TrendingGiphy from "../TrendingGiphy/TrendingGiphy";
import giphyArtists from "../ArtistsGiphy/artists";
import ArtistsGiphy from "../ArtistsGiphy/ArtistsGiphy";
import "./Media.css";
import ClipsGiphy from "../ClipsGiphy/ClipsGiphy";
const Media = () => {
  const [trending, setTrending] = useState([]);
  const [artists, setArtists] = useState([]);
  const [clips, setClips] = useState([]);
  const [stories, setStories] = useState([]);

  //Random Gifs
  const randomizeData = (content) => {
    return content.data.sort(() => Math.random() - 0.5);
  };
  //Get Trending
  const getTrendingGiphy = async () => {
    const trending = await fetchTrendingGiphys();
    setTrending(randomizeData(trending.data));
  };
  //Get Artists
  const getArtistsGiphy = async () => {
    const artists = await Promise.all(
      giphyArtists.map(async (giphyArtists) => {
        return fetchSearchGiphys(giphyArtists).then((res) => res.data.data);
      })
    );
    setArtists(artists.flat());
  };
  //Get Clips
  const getClipsGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  //get stories
  const getStoriesGiphy = async (query, setState) => {
    const searched = await fetchSearchGiphys(query);
    setState(randomizeData(searched.data));
  };
  useEffect(() => {
    getTrendingGiphy();
    getArtistsGiphy();
    getClipsGiphy("league of legend", setClips);
    getStoriesGiphy("sant valentin", setStories);
  }, []);
  /*   console.log(trending,"trending testing!") */
  /*  console.log(clips, "clips testing!"); */
  /*   console.log(artists, "artists testing!"); */
  console.log(stories, "stories testing!");
  /*  console.clear(); */
  return (
    <div className="name_media">
      <div className="name">
        <div className="media_name">
          <h1>📈Trending</h1>
        </div>
        <div className="trending_container">
          {/*   <button>
            <MdNavigateNext />
          </button> */}
          {trending?.map((trendingGiphy, index) => {
            return <TrendingGiphy giphy={trendingGiphy} key={index} />;
          })}
          {/*      <button>
            <MdNavigateBefore />
          </button> */}
        </div>
      </div>
      <div className="name">
        <div className="media_name">
          <h1>🎨Artists</h1>
        </div>
        <div className="artists_container">
          {artists?.map((artistsGiphy, index) => {
            return <ArtistsGiphy giphy={artistsGiphy} key={index} />;
          })}
        </div>
      </div>
      <div className="name">
        <div className="media_name">
          <h1>📎Clips</h1>
        </div>
        <div className="clips_container">
          <ClipsGiphy giphyArray={clips} />
        </div>
      </div>
      <div className="name">
        <div className="media_name">
          <h1>📜Stories</h1>
        </div>
        <div className="stories_container">
          <p>Stories</p>
        </div>
      </div>
    </div>
  );
};
export default Media;
