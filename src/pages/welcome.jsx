import React from "react";

function ErrorPage() {
  return (
    <>
      <h1 className="text-center">Welcome Example ReactJs</h1>
      <card className="card text-center">
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
          <a
            href="/example-reactquery"
            class="list-group-item list-group-item-action list-group-item-secondary"
          >
            Example React Query
          </a>
          <li class="list-group-item list-group-item-success">
            A simple success list group item
          </li>
          <li class="list-group-item list-group-item-danger">
            A simple danger list group item
          </li>
          <li class="list-group-item list-group-item-warning">
            A simple warning list group item
          </li>
          <li class="list-group-item list-group-item-info">
            A simple info list group item
          </li>
          <li class="list-group-item list-group-item-light">
            A simple light list group item
          </li>
          <li class="list-group-item list-group-item-dark">
            A simple dark list group item
          </li>
        </div>
      </card>
    </>
  );
}

export default ErrorPage;
