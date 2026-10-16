import { useState } from "react";
import RepoCard from './RepoCard'
const Repositories = () => {

  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);


  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

    return(<main className="grid grid-cols-3 gap-8 px-20 pt-8">
            <RepoCard name="portfolio" description="My personal page built with React." language="JavaScript" commits="48 commits"/>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold"></h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarTodo}
            >
              ★ {todoStars}
            </button>
          </div>
          <p className="mt-2 text-xl"></p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Java
            </span>
            <span>31 commits</span>
          </div>
        </div>
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">dotfiles</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarDotfiles}
            >
              ★ {dotfilesStars}
            </button>
          </div>
          <p className="mt-2 text-xl"></p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              Shell
            </span>
            <span>12 commits</span>
          </div>
        </div>
      </main>);
};

export default Repositories;