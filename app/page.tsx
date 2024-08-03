"use client";

import { Authenticator, Image, View, useTheme } from "@aws-amplify/ui-react";

import "@aws-amplify/ui-react/styles.css";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";



export default function App() {

  

  return (
    <div className="h-full w-full flex flex-row ">
      <div className="w-1/2 bg-blue-700"></div>
          <main>
            <h1>My todos</h1>
           
            <ul>
            
            </ul>
            <div>
              🥳 App successfully hosted. Try creating a new todo.
              <br />
              <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                Review next steps of this tutorial.
              </a>
            </div>
          </main>
   
    </div>
  );
}
