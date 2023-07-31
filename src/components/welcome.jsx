import React from "react";

function ErrorPage() {
  return (
    <>
      <card className="card text-center">
        <h1 className="card-title">Welcome Example ReactJs</h1>
        <div class="list-group lis">
          <a
            href="/redux-toolkit"
            class="list-group-item list-group-item-action"
          >
            Example Redux Toolkit
          </a>

          <a
            href="/example-context"
            class="list-group-item list-group-item-action list-group-item-primary"
          >
            Example Context Api
          </a>
        </div>
      </card>
    </>
  );
}

export default ErrorPage;
