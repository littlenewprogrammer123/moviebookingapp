import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedMovies.css';

export const movies = [
  {
    id: 1,
    title: 'One Piece Film: Red',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-1.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/red.mp4`, // direct video file
    description: 'Uta, the world’s most beloved singer, reveals her identity.',
    rating: '6.7/10',
  },
  {
    id: 2,
    title: 'One Piece: Stampede',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-2.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/stampede.mp4`,
    description: 'The greatest pirate expo where all pirates gather.',
    rating: '7.5/10',
  },
  {
    id: 3,
    title: 'One Piece Film Gold',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-3.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/gold.mp4`,
    description: 'The Straw Hats meet a mysterious tycoon on Gran Tesoro.',
    rating: '7.1/10',
  },
  {
    id: 4,
    title: 'One Piece Film: Z',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-4.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/z.mp4`,
    description: 'The Straw Hats face the Neo Marines led by Zephyr.',
    rating: '7.9/10',
  },
  {
    id: 5,
    title: 'One Piece 3D: Straw Hat Chase',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-5.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/strawhatchase.mp4`,
    description: 'Luffy loses his straw hat and the crew goes after it.',
    rating: '6.4/10',
  },
  {
    id: 6,
    title: 'One Piece: Strong World',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-6.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/strongworld.mp4`,
    description: 'The crew faces a dangerous pirate who returns after 20 years.',
    rating: '7.6/10',
  },
  {
    id: 7,
    title: 'One Piece: Episode of Chopper Plus',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-7.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/episodeofchopperplus.mp4`,
    description: 'A retelling of Chopper’s origin with added characters.',
    rating: '6.9/10',
  },
  {
    id: 8,
    title: 'One Piece: Episode of Alabasta',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-8.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/episodeofalabasta.mp4`,
    description: 'A movie retelling of the Alabasta arc with Vivi.',
    rating: '7.0/10',
  },
  {
    id: 9,
    title: 'Mechanical Soldier of Karakuri Castle',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-9.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/karakuricastle.mp4`,
    description: 'The crew is drawn to an island with legendary treasure.',
    rating: '6.6/10',
  },
  {
    id: 10,
    title: 'Baron Omatsuri and the Secret Island',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-10.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/secretisland.mp4`,
    description: 'A dark tale as the crew visits an eerie island.',
    rating: '7.2/10',
  },
  {
    id: 11,
    title: 'One Piece: Cursed Holy Sword',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-11.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/holysword.mp4`,
    description: 'Zoro vanishes and the crew battles a cursed sword.',
    rating: '6.5/10',
  },
  {
    id: 12,
    title: 'One Piece: Dead End Adventure',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-12.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/deadendadventure.mp4`,
    description: 'The crew enters a dangerous pirate race.',
    rating: '7.3/10',
  },
  {
    id: 13,
    title: 'One Piece: Chopper’s Kingdom',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-13.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/chopperkingdom.mp4`,
    description: 'Chopper becomes king of animals on a mysterious island.',
    rating: '6.2/10',
  },
  {
    id: 14,
    title: 'Clockwork Island Adventure',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-14.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/clockwork.mp4`,
    description: 'The Going Merry is stolen, and the crew must recover it.',
    rating: '6.8/10',
  },
  {
    id: 15,
    title: 'One Piece: The Movie',
    image: `${process.env.PUBLIC_URL}/image-source/onepiece-15.webp`,
    teaser: `${process.env.PUBLIC_URL}/videos/themovie.mp4`,
    description: 'Luffy and friends help a boy find a great treasure.',
    rating: '6.5/10',
  },
];

const FeaturedMovies = () => {
  return (
    <section id="now-showing" className="featured-movies">
      <h2>Now Showing</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <Link
                to={`/book/${encodeURIComponent(movie.title)}`}
                state={{ movie }}
              >
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
