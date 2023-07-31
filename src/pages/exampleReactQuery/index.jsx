import React from "react";

import { useGetCharacter } from "./hooks/useGetPoke";

function ExampleReactQuery() {
  const { data } = useGetCharacter();

  return (
    <>
      <div className="row">
        {data?.results?.map((res, index) => (
          <div className="col-sm-4" key={index}>
            <div
              className="card"
              style={{
                width: "18rem",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{res.name}</h5>

                <a href={res.url} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ExampleReactQuery;
