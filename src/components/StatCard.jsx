const StatCard = ({value, label}) => {
    return(
       <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">portfolio</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarPortfolio}
            >
              ★ {portfolioStars}
            </button>
          </div>
       );
};

export default StatCard;