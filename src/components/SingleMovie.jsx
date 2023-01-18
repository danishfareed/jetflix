import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import React, { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const SingleMovie = () => {
    const { slug, movie_id } = useParams();

    /**youtube trailer popup control start */
    let [isYtOpen, setIsYtOpen] = useState(false)
    function closeYtModal() {
        setIsYtOpen(false)
    }
    function openYtModal() {
        setIsYtOpen(true)
    }
    /**youtube trailer popup control end */

    /**Api call to fetch single movie details start */
    const { data: getMovie, isSuccess: isMovieSuccess } = useQuery(
        ["getSingleMovie", movie_id],
        async () => {
        try {
            const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos&language=en-US`
            );
            return data;
        } catch (error) {
            console.log("Movies List Fetch error", error);
        }
        }
    );
    /**Api call to fetch single movie details end */

    /**Single movie constants start */
    const trailerLinks = getMovie?.videos?.results?.filter( e=> e.type ==='Trailer')[0];
    //const trailerLink = `https://www.youtube.com/watch?v=${trailerLinks?.key}`;
    const releaseDate = new Date(getMovie?.release_date);

    /**Single movie constants end */

    /**youtube trailer modal content start*/
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        },
    };

    const youtubeTrailer = ()=>{
        return(
            <>
            <Transition appear show={isYtOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeYtModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-[680px] transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex justify-between">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white"
                    >
                        Watch Trailer
                    </Dialog.Title>
                    <button
                        type="button"
                        className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
                        onClick={closeYtModal}
                        >
                        X
                        </button>
                    </div>
                    

                    <div className="mt-2">
                    <YouTube videoId={trailerLinks?.key} opts={opts} />
                    </div>

                    <div className="mt-4">
                        
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
            </>
        )
    }
    /**youtube trailer modal content end*/


  return (
    <>
<div className='w-full h-screen text-white'>
        <div className='w-full h-screen' >
            <div className='absolute w-full h-screen bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${getMovie?.backdrop_path}`}  alt={getMovie?.original_title}/>
            <div className='absolute w-full top-[35%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{getMovie?.original_title}</h1>
                <div className='my-4'>
                    <button className='border rounded-sm bg-cyan-400 text-black border-cyan-400 py-2 px-5'>Save</button>
                    <button onClick={openYtModal} className='border rounded-sm text-white border-gray-300 py-2 px-5 ml-4'>Watch Trailer</button>
                </div>
                <p className='text-gray-400 text-sm'> {releaseDate.getFullYear()}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{getMovie?.overview}</p>
            </div>
        </div>
    </div>
    {youtubeTrailer()}
    </>
  );
};

export default SingleMovie;
