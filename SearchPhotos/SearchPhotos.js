import React, { useState } from "react";
import Unsplash, { toJson } from 'unsplash-js'
import { Button } from './SearchPhotos.elements';

const unsplash = new Unsplash({accessKey: 'SCHgXGPWqnVK2e7fwxpEAHPA-6vD8pAYifLO1TE0Qg0',})


export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([])

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query)
    .then(toJson)
    .then((json) => {
      setPics(json.results)
    })
  }
  

  return (
    <>
      <form className="form">
        <label className="label" htmlFor="query" onSubmit={searchPhotos}>
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search photos...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">
          Search
        </Button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
  );
}