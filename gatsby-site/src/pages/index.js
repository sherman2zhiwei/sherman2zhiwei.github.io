import React from "react"
import { Helmet } from "react-helmet"
import ProfessionalExperience from "../components/professional_experience"

import "../styles/style.css"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>It's A Portfolio</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      </Helmet>
      
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col h-100 d-flex flex-column justify-content-center px-5">
            <div>
              <h1 className="display-1">I'm Zhiwei.</h1>
              <h1 className="display-1">I'm a software engineer.</h1>
              <h1 className="display-1">This is a little bit of who I am.</h1>    
            </div>
          </div>
        </div>

        <div className="row h-100">
          <div className="col h-100 d-flex flex-column bg-dark text-white px-5 justify-content-center">
            <h1 className="my-4">Who Am I?</h1>
            <p>I'm just a curious guy who loves solving problems with code. I grew up tinkering with robotics, which introduced me to the world of programming, and I've been coding ever since!</p>

            <p>These days, I'm looking to become an expert in backend development, specifically using Spring. Through my previous experiences, I enjoyed developing scalable solutions, hence developing and maintaining a backend service that serves millions (or even billions) of users is my next exciting goal.</p>
            <p>Right now, I'm actively looking for a job in Korea. I am really fascinated by Korean culture, and working in a bustling metropolitan area with a prominent culture sounds alluring to me.</p>

            <p>Outside of work, I enjoy working on personal projects, testing business ideas and chasing dreams. One day, I dream of creating a start-up, and selling a product I can call my own.</p>

          </div>

          <div className="col h-100 d-flex flex-column bg-dark text-white px-4 justify-content-center">
            <img src="./thats-me-cropped.png" className="img-fluid thats-me" alt="A Picture of Me (Wong Zhiwei)"/>
          </div>
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex flex-column justify-content-center px-5">
              <div>
                <h1 className="mb-5 display-3">Professional Experience</h1>

                <div className="row h-100">
                      <ProfessionalExperience/>

                      {/* <a href="javascript:void(0)" className="list-group-item list-group-item-action active">
                        MIMOS Berhad
                      </a>
                      <a href="javascript:void(0)" className="list-group-item list-group-item-action">Digi-X</a>
                      <a href="javascript:void(0)" className="list-group-item list-group-item-action">PwC</a> */}
                </div>


                


              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex flex-column justify-content-center">
              <div>
                <p className="lead">Education</p>
                <p>Bachelor of Computer Science (Honours) - Monash University Malaysia</p>
                <p>October 2016 - June 2020</p>
                <p>CGPA : 3.92/4.0</p>
                <p>Weighted Average Mark : 85.7/100</p>
                <p>Honors and Awards : Cliff Bellamy Awards (Dean's Achievement Award - Highest Achieving Student), Highest Unit
                  Score Award, Faculty of IT Best Graduate</p>
                <p>Relevant Coursework : Object Oriented Design and Implementation in Java, Advanced Algorithms and Data
                  Structures, Android Application Development, Parallel and Distributed Computing</p>
                <p>Honours Research Thesis : Incorporating Contextual Data in Sequence-Based Recommender Systems</p>

                <p>HELP Academy</p>
                <p>January 2014 - July 2015</p>
                <p>A-Levels : Physics, Economics, Mathematics, Further Mathematics (4A*)</p>
                <p>Honors and Awards : Highest Mark in the World - Cambridge International AS Level Economics 2014</p>

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex flex-column justify-content-center">
              <div>
                <p className="lead">Personal Projects</p>

                FOOD RECOMMENDATION SYSTEM (PERSONAL PROJECT)
                ● Inspired by personal difficulty in discovering new restaurants to dine-in
                ● Allows users to post and like food recommendations, and uses preferences to generate targeted recommendations
                ● Designed a mobile and web app front-end using Flutter and ReactJS respectively
                ● Implemented Node.js serverless backend on Firebase Cloud Functions
                ● Designed a NoSQL database on Firebase Realtime Database
                ● Obtained location data from Google Places API

                MULTIPLAYER TIC-TAC-TOE GAME (COURSEWORK)
                ● Implemented a multiplayer tic-tac-toe game using a basic HTML frontend, and an Express backend
                ● Used Socket.IO for real-time communication between client and server

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex flex-column justify-content-center">
              <div>
                <p className="lead">Awards and Achievements</p>



                ● Champion - Monash Petrosains Gerontechnology Challenge 2018
                ● Top 10 - Hong Leong Can You Hack It Hackathon 2019
                ● JPA Scholar - Full scholarship by Malaysian government for top students to study at the top 20 universities globally
                ● Champion - Penang Intervarsity Debate Open 2013

              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col h-100 d-flex flex-column justify-content-center">
              <div>
                <p className="lead">Skills</p>

                ● Programming Languages - Python (proficient), Javascript (proficient), Typescript (intermediate), Java (intermediate), R (intermediate), C (Beginner)
                ● Technologies - Node.js, Express, Flask, Django, RDBMS (PostgreSQL), NoSQL, ReactJS, Kafka, MQTT, Druid DB,
                Docker, Firebase, Tensorflow, Android Studio, Linux, Git
                ● Languages - English (native), Mandarin (proficient), Bahasa Malaysia (proficient)
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
