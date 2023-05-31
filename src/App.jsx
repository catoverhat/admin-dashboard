import { Fragment, useState } from "react";
import "./App.css";
import DashboardMenu from "./components/dashboard/dashboardMenu";
import Header from "./components/dashboard/header";
import GithubIcon from "./assets/icons/githubIcon";

function App() {
  
  return (
    <Fragment>
      <DashboardMenu/>
      <Header/>
      <main>
        <section className="my-projects">
          <article className="projects">
            <h4>Cool Project</h4>
            <p>stuff to say askfljasdkfjalsdjflasdjfflasdjf</p>
            <GithubIcon />
          </article>
          <article className="projects">
            <h4>Cool Project</h4>
            <p>stuff to say askfljasdkfjalsdjflasdjfflasdjf</p>
            <GithubIcon />
          </article>
          <article className="projects">
            <h4>Cool Project</h4>
            <p>stuff to say askfljasdkfjalsdjflasdjfflasdjf</p>
            <GithubIcon />
          </article>
          <article className="projects">
            <h4>Cool Project</h4>
            <p>stuff to say askfljasdkfjalsdjflasdjfflasdjf</p>
            <GithubIcon />
          </article>
        </section>
        <section>
          <h3>JS/CSS excercises</h3>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>do this thing askdfjalsdkfjasf</p>
          </article>
        </section>
        <section>
          <h3>Top 5</h3>
          <article className="excercises">
            <h5>number 1</h5>
            <p>Best this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>Best this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>Best this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>Best this thing askdfjalsdkfjasf</p>
          </article>
          <article className="excercises">
            <h5>number 1</h5>
            <p>Best this thing askdfjalsdkfjasf</p>
          </article>
        </section>
      </main>
      <footer>
        <h4>Copyright &copy; 2023 catoverhat</h4>
        <GithubIcon />
      </footer>
    </Fragment>
  );
}

export default App;
