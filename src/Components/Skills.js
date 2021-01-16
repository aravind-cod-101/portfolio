import React from "react";
import "./Skills.css";
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import bootstrap from "../Images/bootstrap.png";
import firebase from "../Images/firebase.png";
import flutter from "../Images/flutter.png";
import git from "../Images/git.png";
import py from "../Images/py.png";
import react from "../Images/react.png";
import nodejs from "../Images/nodejs.png";
import vscode from "../Images/vscode.png";
import github from "../Images/github.png";
import npm from "../Images/npm.png";
import slack from "../Images/slack.png";
import ps from "../Images/ps.png";
import lt from "../Images/lt.png";
import android from "../Images/android.png";
import pycharm from "../Images/pycharm.png";

export default function Skills() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div id="skills">
              <div className="info">Skills</div>
              <div className="skills-boxes">
                <div className="box">
                  <img src={html} alt="" />
                  <h5>Html5</h5>
                </div>
                <div className="box">
                  <img src={css} alt="" />
                  <h5>Css3</h5>
                </div>
                <div className="box">
                  <img src={js} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="box">
                  <img src={react} alt="" />
                  <h5>ReactJS</h5>
                </div>
                <div className="box">
                  <img src={bootstrap} alt="" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="box">
                  <img src={nodejs} alt="" />
                  <h5>Nodejs</h5>
                </div>
                <div className="box">
                  <img src={flutter} alt="" />
                  <h5>Flutter</h5>
                </div>
                <div className="box">
                  <img src={firebase} alt="" />
                  <h5>Firebase</h5>
                </div>
                <div className="box">
                  <img src={py} alt="" />
                  <h5>Python</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="tools">
              <div className="info">Tools</div>
              <div className="skills-boxes">
                <div className="box">
                  <img src={vscode} alt="" />
                  <h5>Vs Code</h5>
                </div>

                <div className="box">
                  <img src={slack} alt="" />
                  <h5>Slack</h5>
                </div>
                <div className="box">
                  <img src={ps} alt="" />
                  <h5>Photoshop</h5>
                </div>
                <div className="box">
                  <img src={lt} alt="" />
                  <h5>Lightroom</h5>
                </div>
                <div className="box">
                  <img src={pycharm} alt="" />
                  <h5>Pycharm</h5>
                </div>
                <div className="box">
                  <img src={android} alt="" />
                  <h5>Android Studio</h5>
                </div>
                <div className="box">
                  <img src={git} alt="" />
                  <h5>Git</h5>
                </div>
                <div className="box">
                  <img src={github} alt="" />
                  <h5>Github</h5>
                </div>
                <div className="box">
                  <img src={npm} alt="" />
                  <h5>Npm</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
